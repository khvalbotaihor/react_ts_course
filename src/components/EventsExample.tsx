import React, {FC, useRef, useState} from 'react';

const EventsExample :FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('DROP')
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChangeHandler} placeholder="Controlled input"/>
            <input type="text" ref={inputRef} placeholder="Not controlled input"/>
            <button onClick={clickHandler}>Click Button</button>
            <div onDrag={dragHandler} draggable style={{width:200, height: 200, background:'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200, height: 200, background: isDrag? 'blue': 'red', marginTop: 15}}>

            </div>
        </div>
    );
};

export default EventsExample;

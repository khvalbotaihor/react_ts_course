import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id:1, name:"Bill Gates", email:'qqq@.gmail.com', address: {city:'Lviv', street:'Zavodska', zipcode: '80078'}},
        {id:2, name:"Jimmy Wales", email:'bibi@.gmail.com', address: {city:'Ternopil', street:'Pilsuckogo', zipcode: '33402'}},
    ]

    return (
        <div>
            <Card width='200px' height="200px" variant={CardVariant.primary}>
                <button>Button</button>
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;

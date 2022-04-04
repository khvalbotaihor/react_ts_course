import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card width='200px' height="200px" variant={CardVariant.primary}>
                <button>Button</button>
            </Card>
        </div>
    );
};

export default App;

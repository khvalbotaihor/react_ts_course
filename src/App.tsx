import {BrowserRouter, Route} from 'react-router-dom'
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';

const App = () => {
    return (
        <BrowserRouter>
            <Route path={'/users'} exact>
                <UsersPage />
            </Route>
            <Route path={'/todos'} exact>
                <TodosPage />
            </Route>
        </BrowserRouter>
    );
};

export default App;

import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';

const App = () => {
    return (
        <BrowserRouter>
            <div>
            <div>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/todos">Todos</NavLink>
            </div>
            <Route path={'/users'} exact>
                <UsersPage />
            </Route>
            <Route path={'/todos'} exact>
                <TodosPage />
            </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;

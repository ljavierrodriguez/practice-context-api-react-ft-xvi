import { BrowserRouter, Route, Switch } from "react-router-dom"
import Menu from "./components/shared/menu";
import injectContext from "./store/appContext";
import About from "./views/about";
import Contact from "./views/contact";
import Home from "./views/home";
import NotFound from "./views/notfound";
import Users from "./views/users";
import UsersDetail from "./views/usersDetail";

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path={"/users/:user_id/detail"} component={UsersDetail} />
                <Route exact path={"/users"} component={Users} />
                <Route exact path={"/contact"} component={Contact} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/"} component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App);
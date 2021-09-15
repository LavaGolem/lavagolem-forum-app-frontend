import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import UserPage from "./pages/userPage/UserPage";
import QuestionPage from "./pages/questionPage/QuestionPage";
import Menu from "./components/menu/Menu";
import RegisterPage from "./pages/registerPage/RegisterPage";

const App = () => {
    return <Router>
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/userProfile">
                    <UserPage/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                </Route>
                <Route path="/question/:id" children={<QuestionPage/>}/>
            </Switch>
        </div>
    </Router>
}

export default App
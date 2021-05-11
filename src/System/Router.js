import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import UserPage from "../Pages/UserPage";
import UserSearchPage from "../Pages/UserSearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserSearchPage} />
        <Route exact path="/user/:userLogin" component={UserPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

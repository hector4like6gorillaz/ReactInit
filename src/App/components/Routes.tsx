
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";


const Routes = () => {

    const senti: boolean = false;
    return (
        <>
            <Switch>
                {/* Home */}
                <Route exact path="/">
                    {senti ? <Home /> : <Redirect to="/404" />}
                </Route>

                {/*404 not found*/}
                <Route exact path="/404">
                    {<h1>No se encuentra la pagina</h1>}
                </Route>
                <Redirect to="/404" />

                <Route component={Page404} />

            </Switch>
        </>
    )
}

export default Routes

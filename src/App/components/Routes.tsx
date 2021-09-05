
import { Redirect, Route, Switch } from "react-router";
import Probanding from "../../Pages/Pruebas/Probanding";

const Routes = () => {

    const senti: boolean = false;
    return (
        <>
            <Switch>
                {/* Home */}
                <Route exact path="/home">
                    {senti ? <Probanding /> : <Redirect to="/404" />}
                </Route>


                {/*404 not found*/}
                <Route exact path="/404">
                    {<h1>No se encuentra la pagina</h1>}
                </Route>
                <Redirect to="/404" />

            </Switch>
        </>
    )
}

export default Routes

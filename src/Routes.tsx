import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokemonDetail } from "./components/pokemon-detail";
import { PokemonMaster } from "./components/pokemon-master";

export function Routes() {


    return (
        <BrowserRouter>
         <Switch>
                <Route path="/pokemon/:id">
                    <PokemonDetail />
                </Route>
                <Route path="/">
                    <PokemonMaster/>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}
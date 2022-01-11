import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { CepList } from '../pages/cepList/cepList';
import { Home } from "../pages/home/home";
import { Pokemon } from '../pages/pokemon/pokemon';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cep" exact component={CepList} />
            <Route path="/pokemon" exact component={Pokemon} />
        </Switch>
    )
}



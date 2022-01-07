import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { FormList } from "../components/formList/formList";
import { HooksList } from '../components/hooksList/hooksList';
import { ContextList } from '../components/contextList/contextList';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={FormList} />
            <Route path="/hooks" exact component={HooksList} />
            <Route path="/context" exact component={ContextList} />
        </Switch>
    )
}



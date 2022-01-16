import React from 'react';
import Home from './Pages/Home';
import Post from './Pages/Post';
import { Switch, Route } from 'react-router-dom';
import Download from './Pages/Download';
import Create from './Pages/Create';

const App = () => {
    return (
        <React.Fragment>
            <Switch>
            <Route path="/create">
                    <Create />
                </Route>
                <Route path="/download">
                    <Download />
                </Route>
                <Route path="/:id">
                    <Post />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default App;
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import reducers from './reducers';

import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
            <Switch>
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostShow} />
                <Route  path="/" component={PostIndex} />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector('#root'),
);

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Router, Route, hashHistory, Redirect} from 'react-router';
import 'core-js';

import './styles/base.less';
import './styles/doc.less';
import './styles/prism.css';

import Components from './components';
import Home from './home';
import Spec from './spec';

render(<AppContainer>
  <Router history={hashHistory}>
    <Route path="/home" component={Home}/>
    <Route path="/spec" component={Spec}/>
    <Redirect from="/components" to="/components/quick-start"/>
    <Route path="/components/*" component={Components}/>
    <Redirect from="*" to="/home"/>
  </Router>
</AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components', () => {
    const Components = require('./components').default;
    render(<AppContainer>
      <Router history={hashHistory}>
        <Route path="/home" component={Home}/>
        <Route path="/spec" component={Spec}/>
        <Redirect from="/components" to="/components/quick-start"/>
        <Route path="/components/*" component={Components}/>
        <Redirect from="*" to="/home"/>
      </Router>
    </AppContainer>, document.getElementById('app'));
  });
}

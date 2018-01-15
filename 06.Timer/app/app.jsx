var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="coundown" component={Countdown}/>
          <IndexRoute component={Timer}/>
      </Route>
  </Router>,
  document.getElementById('app')
);

//phyton error
//    https://github.com/felixrieseberg/windows-build-tools/issues/56
//is donw with admin in comand
//    npm install --global --production windows-build-tools
//most likes        npm --add-python-to-path='true' --debug install --global windows-build-tools

//test dependencies
// npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev

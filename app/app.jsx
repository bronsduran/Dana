var React = require('react');
var ReactDOM = require('react-dom');

// Notice that we've organized all of our routes into a separate file.
var Router = require('./router.jsx');


// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));

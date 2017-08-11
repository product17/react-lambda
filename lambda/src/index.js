import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './components/app';

// Create the factory
const app = React.createFactory(App);

// Export the root handler
exports.handler = (event, context, callback) => {
  callback(null, {
    name: 'test',
    html: ReactDOM.renderToString(app({ data: 'stuff' })),
  });
};

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import subscribeUser from './subscription';

ReactDOM.render(<App />, document.getElementById('root'));
subscribeUser();
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { addLocaleData } from 'react-intl';

import initStore from './store.js';
import App from './App.jsx';
import TestView from './views/test.view.jsx';
import IntlProvider from './components/IntlProvider.jsx';

const history = createHistory();
const store = initStore(history);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/test' component={TestView} />
        </Switch>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

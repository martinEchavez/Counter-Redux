import React from 'react'
import { render } from 'react-dom'
import CounterContainer from './containers/Counter'

import { counter } from './reducers'
import { createStore } from 'redux'

import { Provider } from 'react-redux'

const store = createStore(counter);

  render(
      <Provider store={store}>
        <CounterContainer/>
      </Provider>,
    document.getElementById('root')
  );
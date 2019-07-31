import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Credux } from '../../src'

import Test from './Test'

const credux = new Credux();

class Demo extends Component {
  render() {
    return(
      <Provider store={credux.store}>
      <div>
        <h1>credux Demo</h1>
        <Test />
      </div>
      </Provider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))

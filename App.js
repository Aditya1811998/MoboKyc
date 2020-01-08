import React,{Component} from 'react';
import Routers from './src/Routers'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducers from './src/Reducer'

export default class  App extends Component{
  render(){
    const store = createStore(Reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Routers/>
      </Provider>
    );
  }
}



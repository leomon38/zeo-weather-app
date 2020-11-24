import { applyMiddleware, createStore } from 'redux'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'


const Store = createStore(RootReducer, applyMiddleware(thunk));

//export type RootStore = ReturnType<typeof RootReducer>

export default Store
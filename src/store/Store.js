import {createStore, combineReducers} from "redux"
import UserReducers from "../Reducers/UserReducers"
import Authreducer from "../Reducers/Authreducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

let reducers = combineReducers({UserReducers:UserReducers, 
Authreducer: Authreducer
});

const persistedReducer = persistReducer(persistConfig, reducers)
let Store = createStore(persistedReducer)
let persistor = persistStore(Store)






export  {Store, persistor};

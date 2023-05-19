import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, userReducer);

// from userReducer to persistedReducer, which is an enhanced reducer with configuration to persist the userReducer state to local storage. 
export const store =  configureStore({
  reducer: persistedReducer,
  middleware:[thunk]
})

export const persistor = persistStore(store) 

// for multiple reducers/combine reducers

// const rootReducer = combineReducers({ 
//   user: userReducer,
//   notes: NotesReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer
// })
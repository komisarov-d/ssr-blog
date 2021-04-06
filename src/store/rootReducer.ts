import { appReducer } from './appReducer/appReducer';
import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux"
import thunk from "redux-thunk"
import { postReducer } from "./postStore/postReducer"

const rootReducer = combineReducers({
   posts: postReducer,
   app: appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppState = ReturnType<typeof rootReducer>
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export default store

import { combineReducers } from 'redux'
import { modalReducer } from './modal/reducer'

export const rootReducer = combineReducers({
  modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>

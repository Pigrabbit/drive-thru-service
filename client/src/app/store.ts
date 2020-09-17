import { createStore } from 'redux'
import { toggleModalActionType, TOGGLE_MODAL } from './actionTypes'

export interface toggleModalState {
  isVisible: boolean
}

const initialState: toggleModalState = {
  isVisible: false
}

function reducer(state = initialState, action: toggleModalActionType) {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {...state, isVisible: action.payload.isVisible}
    default:
      return {...state}
  }
}

export const store = createStore(reducer)

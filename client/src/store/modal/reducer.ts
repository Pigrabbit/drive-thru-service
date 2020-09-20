import { toggleModalState, toggleModalActionType, TOGGLE_MODAL } from './types'

const initialState: toggleModalState = {
  isVisible: false,
}

export function modalReducer(
  state = initialState,
  action: toggleModalActionType
): toggleModalState {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isVisible: action.payload.isVisible }
    default:
      return { ...state }
  }
}

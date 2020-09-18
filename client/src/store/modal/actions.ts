import { toggleModalState, TOGGLE_MODAL } from "./types"

// action creator
export const toggleModal = (payload: toggleModalState) => {
  return {
    type: TOGGLE_MODAL,
    payload
  }
}

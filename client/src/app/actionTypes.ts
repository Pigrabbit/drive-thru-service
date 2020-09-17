export const TOGGLE_MODAL = 'toggleModal'

export interface toggleModalPayload {
  isVisible: boolean
}

interface toggleModalAction {
  type: typeof TOGGLE_MODAL
  payload: toggleModalPayload
}

export type toggleModalActionType = toggleModalAction

export const toggleModal = (payload: toggleModalPayload) => {
  return {
    type: TOGGLE_MODAL,
    payload
  }
}
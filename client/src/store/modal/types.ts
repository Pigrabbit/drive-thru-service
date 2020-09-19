export interface toggleModalState {
  isVisible: boolean
}
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

interface toggleModalAction {
  type: typeof TOGGLE_MODAL
  payload: toggleModalState
}

export type toggleModalActionType = toggleModalAction

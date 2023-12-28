type ActionType =
    | setPopupType
type setPopupType = ReturnType<typeof setPopup>


type InitialStateType = typeof InitialState
const InitialState = {
    popup: false,
    total: 0
}
export const appReducer = (state: InitialStateType = InitialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-POPUP': {
            return {...state, popup: action.popup}
        }
        default: {
            return state
        }
    }
}

export const setPopup = (popup: boolean) => ({type: 'SET-POPUP', popup} as const)
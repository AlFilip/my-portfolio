export const initState = {
    appStatus: 'idle',
    popUpMessage: '',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POPUP_MESSAGE':
            return {
                ...state,
                popUpMessage: action.message,
                appStatus: 'idle'

            }
        case 'SET_APP_STATUS':
            return {
                ...state,
                appStatus: action.appStatus
            }
        default:
            return state
    }
}

export const setPopUpMessage = (message) => ({
    type: 'SET_POPUP_MESSAGE', message
})

export const setAppStatus = (appStatus) => ({
    type: 'SET_APP_STATUS', appStatus
})
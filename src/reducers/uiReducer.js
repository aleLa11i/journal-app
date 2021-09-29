
const initialState = {
    loading: false,
    msj: null,
}

export const uiLoginReducer = (state = initialState,action ) => {


    switch (action.type) {
        case "setErrorLogin":
            return ({
                ...state,
                msj: action.payload,
            })

        case "removeErrorLogin":
            return ({
                ...state,
                msj: action.payload
            })
        case "uiStartLoading":
            return ({
                
                loading: true,
            })
        case "uiFinishLoading":
            return ({
                ...state,
                loading: false,
                msj: action.payload
            })

        default:
            return state;
    }

}

export const uiRegisterReducer = (state = initialState,action ) => {


    switch (action.type) {
        case "setErrorRegister":
            return ({
                msj: action.payload,
            })

        case "removeErrorRegister":
            return ({
                msj: action.payload
            })

        default:
            return state;
    }

}

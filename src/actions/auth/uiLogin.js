export const setErrorLogin = (err) => {
    return ({
        type:"setError",
        payload: err
    });
}

export const removeErrorLogin = (suc) => {
    return ({
        type:"removeError",
        payload: suc
    });
}

export const uiStartLoading = () => {
    return ({
        type:"uiStartLoading",
    });
}

export const uiFinishLoading = (resp) => {
    return ({
        type:"uiFinishLoading",
        payload: resp
    });
}


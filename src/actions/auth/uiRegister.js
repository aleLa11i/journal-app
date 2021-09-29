export const setErrorRegister = (err) => {
    return ({
        type:"setErrorRegister",
        payload: err
    });
}

export const removeErrorRegister = (suc) => {
    return ({
        type:"removeErrorRegister",
        payload: suc
    });
}
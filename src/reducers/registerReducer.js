
export const registerReducer = ( state = {} , action ) => {

    switch (action.type) {
        case "register":
            return({
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                imageURL: action.payload.imageURL
            });

        default:
            return state;
    }

}
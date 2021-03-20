const initialState={
    userSignup: {},
    
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'SAVE_SIGNUP_DETAILS':
            {
                console.log("=====reducer query signup=====",action.payload)
                return{...state, userSignup:action.payload}
            }
            default:
                return state;
    }
}
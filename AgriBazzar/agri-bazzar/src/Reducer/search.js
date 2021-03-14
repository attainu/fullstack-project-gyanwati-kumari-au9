const initialState={
    search:{
        text: ''
    },
    searchresults:[{'text':"Result 1"}]
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'SEARCH_QUERY':
            {
                console.log("=====reducer query=====")
                return{...state, searchresults:action.payload}
            }
            default:
                return state;
    }
}
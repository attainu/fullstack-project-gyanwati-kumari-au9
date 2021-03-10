const initialState={
    search:{
        text: '',
        searchresults:[]
    }
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'SEARCH_QUERY':
            return{...state, searchresults:action.payload}
            default:
                return state;
    }
}
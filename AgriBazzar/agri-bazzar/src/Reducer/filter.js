const initialState={
    items: [],
    filteredItems: [],
    name: ''
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            {
                console.log("=====reducer query=====")
                return{...state, items:action.payload}
            }
        case 'FILTER_PRODUCTS_BY_NAME':
            {
                return {...state, filteredItems: action.payload.items, name: action.payload.name}
            }
            default:
                return state;
    }
}
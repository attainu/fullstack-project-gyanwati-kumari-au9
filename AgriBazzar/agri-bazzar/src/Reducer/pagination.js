const initialState={
    crops:[],
    allCrops:[],
    perPage: 2,
    currPage: 0,
    pageCount: 2,
}

export default (state=initialState,action) => {
    switch(action.type){
        case 'CROPS_PAGINATE':{
            console.log("============", state, action, ...state.allCrops);
            let crops=[...state.allCrops]
            crops = crops.splice(action.payload.pageNum*state.perPage, state.perPage )
            return{...state, currPage: action.payload.pageNum, crops: [...crops], pageCount: Math.round(state.allCrops.length/state.perPage)}
        }
            default:
                return state;
    }
}


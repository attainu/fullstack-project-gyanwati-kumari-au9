export function paginate(pageNum){
    console.log("================> Acion creator", pageNum)
    return {
        type:'CROPS_PAGINATE',
        payload:{
            pageNum: pageNum
        }
    }
}
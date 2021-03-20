export function fetchProducts(){
    fetch("http://localhost:5000/products").then(res => res.json())
    .then(data => {
        return {
            type: 'FETCH_PRODUCTS',
            payload: data,
        }
    });
    
}

export function filterProducts(products,name){
    console.log("================> Acion creator", products)
    return {
        type:'FILTER_PRODUCTS_BY_NAME',
        payload:{
            name:name,
            items: name === ''? products:products.filter(a=>a.avilableNames.indexOf(name.toUpperCase()) >= 0)
        }
    }
}
const url = "http://localhost:5000/search";


export function SearchQuery(searchQuery){
    const output = fetch(`${url}?q=${searchQuery}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'SEARCH_QUERY',
        payload:output
    }
}
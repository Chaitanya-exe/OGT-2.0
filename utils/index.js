export function fetchId(query){
    const params = query.split("/");
    return params.pop();
}
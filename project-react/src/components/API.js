const { default: axios } = require("axios");
const LINK = 'http://localhost:8000/api/';
const linkMethods = axios.create({
    baseURL: LINK,
    headers: {
        api_token: "zFkUIwYOLFY79ZSemfSqqIUmguqHzHMZYBnwXq97"
    }
});
// get data
export const GETDATA = (uri) => {
    let request = linkMethods.get(uri);
    let response = request.then(response => {
        return response.data
    })
    return response;
}
//  post data
export const POSTDATA = (uri, data) => {

    let request = linkMethods.post(uri, data);
    let response = request.then(response => response.data);

    return response;

}
// delete data
export const DELETEDATA = (uri) => {
    let request = linkMethods.delete(uri);
    let response = request.then(response => response.data);
    return response;
}
// put data
export const PUTDATA = (uri, data) => {
    let results;
    linkMethods.put(uri, data).then(response => {
        results = response.data;
    })
    return results;
}
export const getTotal = async (info) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(info);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch("http://localhost:4444/rest/orden/total", requestOptions);
    let respjason = await response.json();
    return respjason.total.toFixed(2);
}
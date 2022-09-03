function displayArray(arr){
    let html = ""
    for (let i = 0; i < arr.length; i++){
        html += `<li>${arr[i]}</li>`;
    }
    return html;
}

let playlist = [
    "Creep",
    "Slow Dancing in the Dark",
    "Glimpse of Us",
    "Conceived Sorrow",
    "Dazzle Vision",
    "Face Down",
    "Teenagers"
]

document.querySelector("main").innerHTML = `<ol>${displayArray(playlist)}</ol>`
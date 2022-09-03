function displayArray(arr){
    let html = ""
    for (let i = 0; i < arr.length; i++){
        html += `<li>${arr[i]}</li>`;
    }
    return html;
}

const main = document.querySelector("main");


let wispTypes = [
    "Moxie",
    "Vim",
    "Chum",
]

let jobTypes = [
    "Librarian",
    "Guard",
    "Scientist",
    "Doctor",
    "Teacher",
    "Trainer",
    "Chef",
    "Merchant"
]

main.innerHTML += `<ol>${displayArray(wispTypes)}</ol>`
main.innerHTML += `<ol>${displayArray(jobTypes)}</ol>`
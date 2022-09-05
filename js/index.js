function writeToMain(html){
    document.querySelector("main").innerHTML += html;
}

const wisp = {
    name: 'Aero',
    job: 'Knight',
    age: 23,
    type: 'Vim',
    skills: ['swordsman', 'blacksmith', 'adventurer']
}

for (let key in wisp){
    writeToMain(`<p>${key}: ${wisp[key]}</p>`);
}
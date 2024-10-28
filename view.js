updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>${randomAnimal}</div>
    <button onclick="getRandomAnimal()">Show me a random animal</button>
    <button onclick="backpack()">Show all animals</button>
    <input type="text" onchange="addAnimal(this.value)" placeholder="Legg til et dyr"/>
    `
}

function backpack(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Mine dyr:</div>
    <div>${showAllAnimals()}</div>
    <button onclick="updateView()">Tilbake</button>
    `
}
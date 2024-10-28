function getRandomAnimal(){
    randomIndex = Math.floor(Math.random()*animals.length)
    randomAnimal = animals[randomIndex]
    updateView()
}

function showAllAnimals(){
    let html = ''; 
    for(let i = 0; i < animals.length; i++){
        html += `<li>${animals[i]}</li>`
    }
    return html;
}
//Denne skulle vært i view

function addAnimal(newAnimal){
    animals.push(newAnimal)
}

//math.random på få tilfeldig
//vis Array på showAll
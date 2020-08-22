import API from './api.js';
const api = new API();


const $characterContainer = document.querySelector('#character-container');

class Character{
    constructor({name, image, status, species, location}){
        this.name = name
        this.image = image
        this.status = status
        this.species = species
        this.location = location
        this.render()
    }

    build(){
 //      return `
//        <article class="character">
//        <div class="character-grid">
//            <img src="${this.image}">
//            <h2 class="character-name">${this.name}</h2>
//            <div class="character-labels">
//            <h3 class="character-label">Localizacion: ${this.location.name}</h3>
//            <h3 class="character-label">Especie: ${this.species}</h3>
//            <h3 class="character-label">Status: ${this.status}</h3>
//            </div>
//        </div>
//    </article>
`
    }
    render(){
        $characterContainer.innerHTML = this.build();
    }
}

async function initApp(initCharacterId){
    const characterData = await api.getcharacter(initCharacterId)
    console.log(characterData)
    const rick = new Character(characterData)
}



window.onload = function(){
    let cont = 1;
    document.getElementById('contador').onclick = function(){
        initApp(cont);
        cont++;
        
    }
}
initApp(1)
// rick.render();

// console.log(api.getcharacter(1));
import API from './api.js';
import Character from './character.js '
const api = new API();




async function initApp(initCharacterId){
    const characterData = await api.getcharacter(initCharacterId)
    console.log(characterData)
    const rick = new Character(characterData)
}

window.onload = function(){
    var cont=0;
    document.getElementById("btn-next").onclick = function(){
        cont++
        initApp(cont)
    }
}


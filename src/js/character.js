export default  class Character{
    constructor({name, image, status, species, location}){
        this.name = name
        this.image = image
        this.status = status
        this.species = species
        this.location = location
        this.$containerImg = document.querySelector('#container-img');
        this.$containerData = document.querySelector('#container-data');
        this.render()
    }

    buildImg(){
        return `
        <img class="character-img" src="${this.image}" alt="character">
        <img class="character-portal" src="src/img/portal.gif" alt="portal">
        `
    }

    buildData(){
        return `
        <div class="data-name">
        <h3>Name</h3>
        <h2>${this.name}</h2>
    </div>
    <div class="data-labels">
        <h3 class="label-about">About</h3>
        <div class="labels">
            <h3>Especie: ${this.species}</h3>
            <h3>Estado: ${this.status}</h3>
            <h3>Localizacion: ${this.location.name}</h3>
        </div>
    </div>
        `
    }

    render(){
        console.log(this.$characterContainer)
        this.$containerImg.innerHTML = this.buildImg();
        this.$containerData.innerHTML = this.buildData();
    }
}
function Pet(nome) {
    let _nome = nome;

    this.getNome = function () {
        return _nome;
    }
}

function Cachorro(nome, raca, cor) {
    this.raca = raca;
    this.cor = cor;

    this.adotar = function () {
        console.log("PET: Cachorro");
        console.log("Raça: " + this.raca);
        console.log("Nome: " + this.getNome());
        console.log("Cor: " + this.cor);
        console.log("");
    }
    Pet.call(this, nome);
}

function Gato(nome, raca, cor) {
    this.raca = raca;
    this.cor = cor;

    this.adotar = function () {
        console.log("PET: Gato");
        console.log("Raça: " + this.raca);
        console.log("Nome: " + this.getNome());
        console.log("Cor: " + this.cor);
        console.log("");
    }    
    Pet.call(this, nome);
}

const adocao_1 = new Cachorro("Einstein", "Border collie", "Preto/branco");
const adocao_2 = new Cachorro("Billy", "Beagle", "Marrom/branco");
const adocao_3 = new Gato("Pudim", "Persa", "Laranja");

adocao_1.adotar();
adocao_2.adotar();
adocao_3.adotar();
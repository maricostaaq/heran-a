import { usuario } from "./usuario.js";

export class cliente extends usuario {
    nome;
    cpf;
    constructor(id,email,senha,nome,cpf){
// executa o construtor pai
        super(id,email,senha)
        this.nome=nome;
        this.cpf=cpf;
    }
    info(){
        console.log("---------------------");
        console.log("Cliente: " + this.nome);
        console.log("Email: " + this.email);
        console.log("---------------------");
    }
}
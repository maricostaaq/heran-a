import { usuario } from "./usuario.js";

export class logista extends usuario {
    razao_social;
    cnpj;
    constructor(id,email,senha,razao_social,cnpj){
        super(id,email,senha)
        this.razao_social=razao_social;
        this.cnpj=cnpj;
    }

}
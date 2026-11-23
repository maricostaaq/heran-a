import { cliente } from "./model/cliente.js";
import { usuario } from "./model/usuario.js";
import { logista } from "./model/logista.js";

const c1 = new cliente(1,"mariana@gmail.com","123456","Mariana Costa","123456789");
const u1 = new usuario(1,"luisa@gmail.com","123456","Luisa Ferreira","123456789", "Luisa F", "4567895");
console.log(c1.login());
c1.info();
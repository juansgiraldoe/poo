//Clases

//Class declaration.
class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  };
};

const juan = new Cliente('Juan', 400);

//Class expression.
const Cliente2 = class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  };
}
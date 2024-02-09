//Clases

//Class declaration.
class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  };

  //Agregando metodos.
  mostrarInfo(){
    return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
  };

  //Propiedades estaticas.
  static bienvenida(){
    return `Bienvenido al cajero.`
  }
};

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInfo());
console.log(Cliente.bienvenida());//No requiere una instancia (pertenece a la clase y no al objeto.).
console.log(juan);


//Class expression.
const Cliente2 = class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  };
}
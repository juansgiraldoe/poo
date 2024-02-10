//Private
//Agregar # hace que solo se acceda a las propiedades desde la misma clase, no desde fuera de ella.

class Cliente {
  #nombre;
  constructor(nombre, saldo){
    this.#nombre = nombre;
    this.saldo = saldo;
  };
  
  mostrarInfo(){
    return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`
  };
  
  static bienvenida(){
    return `Bienvenido al cajero.`
  };
};

const juan = new Cliente('Juan', 200);
/*❌*/ //console.log(juan.#nombre);
/*✅*/console.log(juan.mostrarInfo());

/////////////////////////////////////////////////////////////////////////

//set y get.

class Cliente2 {
  #nombre;
  
  setNombre(nombre){
    this.#nombre = nombre;
  };
  
  getNombre(){
    return this.#nombre;
  };
  
};

const sebastian = new Cliente2();
sebastian.setNombre('Juan');
console.log(sebastian.getNombre());
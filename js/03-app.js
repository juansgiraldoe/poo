//Herencia de clases

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

class Empresa extends Cliente{
  constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo);//Busca los atributos que indiquemos en la clase padre.
    this.telefono = telefono;
    this.categoria = categoria;
  };

  //Si escribimos un metodo que se llame igual, lo reescribe.
  static bienvenida(){
    return `Bienvenido al cajero de empresas.`
  };
};

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Bustter', 40000000, 31588422101, 'Motociclismo');
console.log(empresa);
console.log(empresa.mostrarInfo());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

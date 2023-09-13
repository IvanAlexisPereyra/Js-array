const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort"],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)

pizzas.forEach((pizzas) => {
  if(pizzas.id % 2 === 1){
    console.log("La", pizzas.nombre, "tiene un id impar.");
  }
})

//b)

pizzas.forEach((pizzas) => {
  if(pizzas.precio < 600){
    console.log("La", pizzas.nombre, "tiene un precio menor a 600.");
  }
})

//c)

pizzas.forEach((pizzas) => {
  console.log("La", pizzas.nombre, "tiene un precio de", pizzas.precio);
})

//d)

pizzas.forEach((pizza) => {
  console.log("la", pizza.nombre, "tiene los siguientes ingredientes:");
  const ingredientes = pizza.ingredientes
  ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  })
})
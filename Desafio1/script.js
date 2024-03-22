let patients = [
  {
    name: "Raphael",
    age: 12,
    weight: 50,
    height: 1.6
  },
  {
    name: "Alex",
    age: 40,
    weight: 70,
    height: 1.7
  },
  {
    name: "Jamal",
    age: 22,
    weight: 50,
    height: 1.9
  }
]

patients.forEach(function(objeto, indice) {
    alert(`
    Nome: ${objeto.name},
    Idade: ${objeto.age},
    Peso: ${objeto.weight},
    Altura: ${objeto.height}`)
})

const Horario = require("./domain/horarios/Horario");

test("asigna una lista vacía cuando no se proporcionan días", () => {
  const horario = new Horario({
    codigo: "d1",
    nombre_distrito: "Distrito 1"
  });

  expect(horario.dias).toEqual([]);
});
// Importamos la clase que queremos probar
const CityGraph = require('./cityGraph.js');

// 'describe' agrupa un conjunto de pruebas relacionadas
describe('Pruebas para el módulo CityGraph de BookingMx', () => {

  let graph;

  // 'beforeEach' es una función que se ejecuta ANTES de cada 'test'
  // Esto nos da un "grafo limpio" para cada prueba, evitando que se contaminen entre sí.
  beforeEach(() => {
    graph = new CityGraph();
    graph.addCity('Monterrey');
    graph.addCity('Guadalajara');
    graph.addCity('CDMX');
  });

  // 'test' (o 'it') es la prueba unitaria individual
  test('debería agregar ciudades nuevas correctamente', () => {
    const result = graph.addCity('Cancún');
    expect(result).toBe(true); // Esperamos que la función devuelva 'true'
    expect(graph.getNearbyCities('Cancún')).toEqual([]); // Esperamos que exista, pero sin conexiones
  });

  test('no debería agregar una ciudad que ya existe', () => {
    const result = graph.addCity('Monterrey');
    expect(result).toBe(false); // Esperamos que devuelva 'false'
  });

  test('debería agregar distancias bidireccionales', () => {
    graph.addDistance('Monterrey', 'Guadalajara', 900);

    // Probamos la conexión MTY -> GDL
    const mtyNeighbors = graph.getNearbyCities('Monterrey');
    expect(mtyNeighbors).toEqual([{ city: 'Guadalajara', distance: 900 }]);

    // Probamos la conexión GDL -> MTY
    const gdlNeighbors = graph.getNearbyCities('Guadalajara');
    expect(gdlNeighbors).toEqual([{ city: 'Monterrey', distance: 900 }]);
  });

  // --- Pruebas de Casos Borde (Edge Cases) y Errores ---
  // Esto es OBLIGATORIO para tu Sprint.

  test('debería manejar la solicitud de una ciudad que no existe', () => {
    // Prueba de "datos inconsistentes"
    const result = graph.getNearbyCities('Tijuana');
    expect(result).toBeNull(); // Nuestra función devuelve null si la ciudad no existe
  });

  test('debería manejar una ciudad sin conexiones (datos vacíos)', () => {
    // Agregamos Saltillo pero no le ponemos distancias
    graph.addCity('Saltillo');
    const result = graph.getNearbyCities('Saltillo');
    expect(result).toEqual([]); // Debe devolver un arreglo vacío
  });

  test('no debería agregar distancias si una ciudad no existe', () => {
    const result = graph.addDistance('Monterrey', 'Tijuana', 1000);
    expect(result).toBe(false); // 'Tijuana' no fue agregada con addCity
  });

  test('no debería aceptar datos inválidos al agregar ciudades', () => {
    expect(graph.addCity(null)).toBe(false);
    expect(graph.addCity(undefined)).toBe(false);
    expect(graph.addCity(123)).toBe(false);
  });

  test('no debería aceptar distancias inválidas', () => {
    expect(graph.addDistance('Monterrey', 'CDMX', -100)).toBe(false); // Distancia negativa
    expect(graph.addDistance('Monterrey', 'CDMX', 0)).toBe(false); // Distancia cero
    expect(graph.addDistance('Monterrey', 'CDMX', 'muy lejos')).toBe(false); // Distancia no numérica
  });
});
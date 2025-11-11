/**
 * Esta clase maneja la lógica para un grafo de ciudades y sus distancias.
 * No es una base de datos, solo la lógica de conexiones.
 */
class CityGraph {
  constructor() {
    // Usamos un Map para guardar las ciudades y sus conexiones (adyacencias)
    // La estructura será: Map<string, Array<Object>>
    // Ejemplo: 'Guadalajara' => [ { city: 'Monterrey', distance: 900 }, { city: 'CDMX', distance: 550 } ]
    this.cities = new Map();
  }

  /**
   * Agrega una nueva ciudad al grafo.
   * @param {string} city - El nombre de la ciudad.
   */
  addCity(city) {
    if (!city || typeof city !== 'string') {
      return false; // No se acepta data inválida
    }
    if (!this.cities.has(city)) {
      this.cities.set(city, []); // Inicia la ciudad con 0 conexiones
      return true;
    }
    return false; // La ciudad ya existía
  }

  /**
   * Agrega una distancia (ruta) entre dos ciudades. Es bidireccional.
   * @param {string} city1
   * @param {string} city2
   * @param {number} distance
   */
  addDistance(city1, city2, distance) {
    // Validar que las ciudades existan y la distancia sea un número
    if (!this.cities.has(city1) || !this.cities.has(city2) || typeof distance !== 'number' || distance <= 0) {
      return false; // Datos inválidos o ciudades no existen
    }

    // Agregar la ruta en ambas direcciones
    this.cities.get(city1).push({ city: city2, distance: distance });
    this.cities.get(city2).push({ city: city1, distance: distance });
    return true;
  }

  /**
   * Obtiene la lista de ciudades cercanas (conexiones) a una ciudad dada.
   * @param {string} city - La ciudad de origen.
   */
  getNearbyCities(city) {
    if (!this.cities.has(city)) {
      return null; // Caso de error: la ciudad no existe
    }
    return this.cities.get(city);
  }
}

// Para que Jest pueda importar esta clase, debemos exportarla.
module.exports = CityGraph;
const cityGraph = {
  'CDMX': [
    { city: 'Queretaro', distance: 213 },
    { city: 'Puebla', distance: 130 }
  ],
  'Queretaro': [
    { city: 'CDMX', distance: 213 },
    { city: 'San Luis Potosi', distance: 205 },
    { city: 'Guadalajara', distance: 330 }
  ],
  'Puebla': [
    { city: 'CDMX', distance: 130 },
    { city: 'Veracruz', distance: 280 }
  ],
  'San Luis Potosi': [
    { city: 'Queretaro', distance: 205 },
    { city: 'Monterrey', distance: 512 }
  ],
  'Guadalajara': [
    { city: 'Queretaro', distance: 330 },
    { city: 'Tepic', distance: 208 }
  ],
  'Veracruz': [
    { city: 'Puebla', distance: 280 }
  ],
  'Monterrey': [
    { city: 'San Luis Potosi', distance: 512 }
  ],
  'Tepic': [
    { city: 'Guadalajara', distance: 208 }
  ]
};

function findNearbyCities(graph, startCity) {
  
  if (!graph[startCity]) {
    return [];
  }

  return graph[startCity];
}

module.exports = { findNearbyCities, cityGraph };
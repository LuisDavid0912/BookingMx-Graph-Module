const { findNearbyCities } = require('./graph.js');


describe('Graph Module - findNearbyCities', () => {

  test('1. (TODO) should return nearby cities correctly', () => {
    const graph = {}; 
    const city = 'CDMX';

    const nearby = findNearbyCities(graph, city);

    expect(nearby).toEqual([]);
  });

});
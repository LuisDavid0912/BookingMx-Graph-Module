const { findNearbyCities, cityGraph } = require('./graph.js');


describe('Graph Module - findNearbyCities', () => {

  test('1. should return nearby cities for an existing city', () => {
    const city = 'CDMX';
    const expectedResult = [
      { city: 'Queretaro', distance: 213 },
      { city: 'Puebla', distance: 130 }
    ];

    const nearby = findNearbyCities(cityGraph, city);

    expect(nearby).toEqual(expectedResult); 
  });



  test('2. should return an empty array for a non-existent city', () => {
    const city = 'Cancun'; 

    const nearby = findNearbyCities(cityGraph, city);


    expect(nearby).toEqual([]); 
  });


  test('3. should return an empty array for invalid input (null)', () => {
    const city = null;

    const nearby = findNearbyCities(cityGraph, city);

    expect(nearby).toEqual([]);
  });

});
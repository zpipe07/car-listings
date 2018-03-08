import * as utils from './utils';

describe('utils', () => {
  const cars = [
    {
      make: 'chevy',
      model: 'astro',
      year: 1999,
      created_at: '2016-10-15T20:13:22.586Z', // third
    },
    {
      make: 'ford',
      model: 'ranger',
      year: 1997,
      created_at: '2006-10-14T20:13:22.586Z', // first
    },
    {
      make: 'nissan',
      model: 'maxima',
      year: 2007,
      created_at: '2016-10-14T20:13:22.586Z', // second
    },
  ];

  describe('sortArray', () => {
    it('should sort cars by descreasing year', () => {
      const result = utils.sortArray(cars, 'year', 1);

      expect(result[0].make).toEqual('ford');
      expect(result[1].make).toEqual('chevy');
      expect(result[2].make).toEqual('nissan');
    });

    it('should sort cars by increasing year', () => {
      const result = utils.sortArray(cars, 'year', -1);

      expect(result[0].make).toEqual('nissan');
      expect(result[1].make).toEqual('chevy');
      expect(result[2].make).toEqual('ford');
    });

    it('should sort by descreasing created_at time', () => {
      const result = utils.sortArray(cars, 'created_at', 1);

      expect(result[0].make).toEqual('ford');
      expect(result[1].make).toEqual('nissan');
      expect(result[2].make).toEqual('chevy');
    });

    it('should sort by increasing created_at time', () => {
      const result = utils.sortArray(cars, 'created_at', -1);

      expect(result[0].make).toEqual('chevy');
      expect(result[1].make).toEqual('nissan');
      expect(result[2].make).toEqual('ford');
    });
  });

  describe('filterCars', () => {
    //
  });
});

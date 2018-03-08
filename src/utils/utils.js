export const sortArray = (array, key, direction) => {
  return array.sort((a, b) => {
    const aKey = key === 'created_at' ? new Date(a[key]).getTime() : a[key];
    const bKey = key === 'created_at' ? new Date(b[key]).getTime() : b[key];

    return direction * (aKey - bKey);
  });
};

export const filterArray = (cars, search) => {
  const searchArray = search.split(' ');

  return cars.filter((car) => {
    for (let i = 0; i < searchArray.length; i++) {
      const word = searchArray[i].toLowerCase();
      const match =
        car.year
          .toString(10)
          .toLowerCase()
          .match(word) ||
        car.make.toLowerCase().match(word) ||
        car.model.toLowerCase().match(word);

      if (!match) {
        return false;
      }
    }

    return true;
  });
};

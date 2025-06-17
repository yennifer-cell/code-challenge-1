function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 3;
  const sugarPerCup = 2;

  return {
    water: waterPerCup * numberOfCups,
    milk: milkPerCup * numberOfCups,
    teaLeaves: teaLeavesPerCup * numberOfCups,
    sugar: sugarPerCup * numberOfCups
  };
}

module.exports = { calculateChaiIngredients };

const { calculateChaiIngredients } = require('./chai');

test('calculates ingredients for 3 cups', () => {
  expect(calculateChaiIngredients(3)).toEqual({
    water: 600,
    milk: 150,
    teaLeaves: 3,
    sugar: 6
  });
});

test('calculates ingredients for 1 cup', () => {
  expect(calculateChaiIngredients(1)).toEqual({
    water: 200,
    milk: 50,
    teaLeaves: 1,
    sugar: 2
  });
});


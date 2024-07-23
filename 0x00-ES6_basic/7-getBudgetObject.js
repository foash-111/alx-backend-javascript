// You can simplify the function by using the shorthand property names feature in ES6,
// which allows you to use just the variable names if they match the property names.
//  Here's the modified function:
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

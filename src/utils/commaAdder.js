export const commaAdder = number => {
  if (number.toString().length <= 3) return number;
  if (number.toString().length <= 6) {
    const str = number.toString().split('');
    str.splice(-3, 0, ',');
    return str.join('');
  }
  const str = number.toString().split('');
  str.splice(-3, 0, ',');
  str.splice(-7, 0, ',');
  return str.join('');
};

function createPhoneNumber(numbers){
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6).join('');
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

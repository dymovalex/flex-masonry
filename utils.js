export const arrayOfObjectsGenerator = (lengthOfArray) => {
  const arr = [];

  for (let i = 0; i < lengthOfArray; i++) {
    let string = ''
    const numberOfWords = Math.floor(Math.random() * 50);

    for (let j = 0; j < numberOfWords; j++) {
      string += 'text ';
    }

    arr.push({
      id: i,
      string,
    });
  }

  return arr;
}
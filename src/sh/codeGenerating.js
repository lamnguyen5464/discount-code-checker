const fs = require('fs');

const directory = './src/sh/codes.js';

const hasDuplicate = list => {
  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1]) return true;
  }
  return false;
};

const createListCode = () => {
  let list = [];

  for (let i = 0; i < 100; i++) {
    list.push(Math.floor(Math.random() * 100000));
  }

  const sortedList = list.sort();

  const hasDuplicateElements = !hasDuplicate(sortedList);
  console.log('hasDuplicateElements', hasDuplicateElements);

  return !hasDuplicateElements ? sortedList : createListCode();
};

const content = `const list = ${JSON.stringify(
  createListCode(),
)}; \nexport default list;`;

fs.writeFile(directory, content, error => {
  console.log('error: ', error);
});

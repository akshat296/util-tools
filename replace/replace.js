function replaceWithCallback(text, pattern, callback) {
  const lines = text.split('\n');
  const processedLines = lines.map(line => line.replace(pattern, callback));
  return processedLines.join('\n');
}

const text = `
  var counter = 1;
  function incrementCounter() {
    counter = counter + 1;
  }
  incrementCounter();
`;
const pattern = /counter = (\d+)/g;
const callback = (match, num) => {
  return `counter = ${parseInt(num) + 1}`;
};

const result = replaceWithCallback(text, pattern, callback);


copyToClipboard(result);

console.log('result', result);
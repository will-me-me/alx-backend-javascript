console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
});
process.stdin.on('end', () => console.log('This important software is now closing'));
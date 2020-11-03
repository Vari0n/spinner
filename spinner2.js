let time = 100;
const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
for(let symbol of spinner) {
setTimeout(() => {
  process.stdout.write('\r  ' + symbol);
}, time);
time += 200;
}


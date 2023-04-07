function drawTriangle(n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
      output += '*'.repeat(i) + '\n';
    }
    return output;
  }

console.log(drawTriangle(10))

console.log('*'.repeat(5))
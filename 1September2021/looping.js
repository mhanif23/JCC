console.log('LOOPING PERTAMA');
i = 1;
while (i <= 20) {
  if (i % 2 === 0) console.log(`${i}. I LOVE CODING`);
  i++;
}

j = 20;
console.log('LOOPING KEDUA');
while (j >= 1) {
  if (j % 2 === 0) console.log(`${j}. I will become a mobile developer`);
  j--;
}

for (k = 1; k <= 20; k++) {
  if (k % 2 === 0) {
    console.log(`${k}. Berkualitas`);
  } else {
    if (k % 3 === 0) {
      console.log(`${k}. I love coding`);
    } else {
      console.log(`${k}. Santai`);
    }
  }
}

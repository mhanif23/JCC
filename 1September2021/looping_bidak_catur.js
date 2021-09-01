const papan_catur = (luas) => {
  const array = [' ', '#'];
  for (i = 1; i <= luas; i++) {
    for (k = 1; k <= luas; k++) {
      if (i % 2 == 0) {
        if (k % 2 == 0) {
          process.stdout.write(array[0]);
        } else {
          process.stdout.write(array[1]);
        }
      } else {
        if (k % 2 == 0) {
          process.stdout.write(array[1]);
        } else {
          process.stdout.write(array[0]);
        }
      }
    }
    console.log();
  }
};

papan_catur(10);

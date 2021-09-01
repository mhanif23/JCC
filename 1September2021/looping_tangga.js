const tangga = (tangga) => {
  for (i = 1; i <= tangga; i++) {
    for (k = 1; k <= i; k++) {
      process.stdout.write('#');
    }
    console.log('');
  }
};

tangga(7);

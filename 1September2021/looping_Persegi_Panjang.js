const persegi_panjang = (panjang, lebar) => {
  for (iterasi = 1; iterasi <= lebar; iterasi++) {
    for (iterasipanjang = 1; iterasipanjang <= panjang; iterasipanjang++) {
      process.stdout.write('#');
    }
    console.log('');
  }
};

persegi_panjang(8, 4);
persegi_panjang(10, 5);

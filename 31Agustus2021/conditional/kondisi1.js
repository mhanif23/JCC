var nama = '';
var peran = '';
// Output:

// Output untuk Input nama = '' dan peran = ''
if (nama == '' && peran == '') console.log('Nama harus diisi!');

//Output untuk Input nama = 'John' dan peran = ''
nama = 'John';
if (peran == '') console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);

//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
nama = 'Jane';
peran = 'Penyihir';
if (nama !== '' && peran !== '')
  console.log(`\nSelamat datang di Dunia Werewolf, ${nama}
Halo ${nama} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);

//Output untuk Input nama = 'Jenita' dan peran 'Guard'
nama = 'Jenita';
peran = 'Guard';

console.log(`\nSelamat datang di Dunia Werewolf, ${nama}`);
console.log(
  `Halo ${peran} ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`,
);

nama = 'Junaedi';
peran = 'Werewolf';
//Output untuk Input nama = `Junaedi` dan peran `Werewolf`
console.log(`\nSelamat datang di Dunia Werewolf, ${nama}`);
console.log(`Halo ${peran} ${nama}, Kamu akan memakan mangsa setiap malam!`);

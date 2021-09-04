const kelompokAngka = (arr)=>{
  hasil = []
  ganjil = []
  genap = []
  kelipatanTiga = []
  for(i=0;i<=arr.length;i++){
    if(arr[i]%3 === 0) {
      kelipatanTiga.push(arr[i])
      continue;
    }
    if(arr[i]%2 === 0){
      genap.push(arr[i])
      continue;
    }
    if(arr[i]%2 === 1){
      ganjil.push(arr[i])
      continue;
    }
  }
  hasil.push(ganjil,genap,kelipatanTiga)
  return hasil
}
  
  //Test Case
  
  console.log(kelompokAngka([1,2,3,4,5,6,7]))
  
  //Output:[[1,5,7],[2,4],[3,6]]
  
  console.log(kelompokAngka([13,27,11,15]))
  
  // //Output:[[13,11],[],[27,15]]
  
  console.log(kelompokAngka([]))
  
  //output:[[],[],[]]
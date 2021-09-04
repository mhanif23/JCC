const hitungVokal=(string)=>{
  kata = string.toLowerCase()
  let vokal = 0
  for(i=0;i<=kata.length;i++){
    if(kata[i] === 'a' || kata[i] === 'i' || kata[i] === 'u'||kata[i] === 'e'|| kata[i] === 'o') vokal++
  }
  return vokal
}
  
  // Test Cases
  
  console.log(hitungVokal("Adonis"))// Output:3
  
  console.log(hitungVokal("Error"))//Output:2
  
  console.log(hitungVokal("Eureka"))//Output:4
  
  console.log(hitungVokal("Rsch")) // Output: 0
const tandaiA = (str) => {
  newStr = ""
  for(i=0;i<str.length;i++){
    if(str[i]==='a') {
      newStr += 'x'
    }else{
      newStr += str[i]
    }
  }
  return newStr
  }
  
  // Tes Cases
  console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
  console.log(tandaiA("garuda")) // gxrudx
  console.log(tandaiA("kucing")) // kucing
const graduate=(arr) =>{
  hasil = {}
  Laravel =[]
  Reactjs = []
  Vuejs = []
  arr.forEach(data => {
    let status = ''
    if(data.score >85) status='mastered'
    if(data.score <=85 && data.score >=60) status='completed'
    if(data.score <60) status='participated'
    let dateTemp = {}
    dateTemp.name = data.name
    dateTemp.score = data.score
    dateTemp.grade = status

   if(data.class === 'Laravel') Laravel.push(dateTemp)
   if(data.class === 'Vuejs') Vuejs.push(dateTemp)
   if(data.class === 'Reactjs') Reactjs.push(dateTemp)
  });
  hasil.Laravel = Laravel
  hasil.Reactjs = Reactjs
  hasil.Vuejs = Vuejs
  return hasil
  }
  
  // TEST CASE
  // Contoh Input
  
  var arr = [
  
  {name:"Ahmad",score:80, class: "Laravel"},
  
  {name:"Regi",score:86, class: "Vuejs"},
  
  {name:"Robert",score:59, class: "Laravel"},
  
  {name:"Bondra",score:81, class: "Reactjs" }
  
  ]
  
  
  console.log(graduate(arr))
  
  //Output
  
  // {
  
  // Laravel:[{name:"Ahmad",score:80, grade: "completed"}, { name: "Robert", score: 59, grade: "participated"}],
  
  // Vuejs:[
  
  // {name:"Regi",score:86, grade: "mastered"}
  
  // ],
  
  // Reactjs:[{name:"Bondra",score:81, grade: "completed"}]
  
  // }
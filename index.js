(async ()=>{
    console.log('App Started');
    const PERSONS = [
        {
            name:'Ahmed Ali',
            age:20
        },
        {
            name:'Saif Amer',
            age:19
        },
        {
            name:'Marwan Ali',
            age:30
        },
        {
            name:'Ameer Qais',
            age:16
        },
        {
            name:'Nabeel Fawzi',
            age:45
        },
        undefined
        ,
        {
            name:'Ali Hasan',
            age:45
        }
    ];
    // TO-DO
    // Promise object/function here
    // 2 params, 1: list, 2: target to match
    // return: Promise, resolve: list after filteration, reject: error message
    // TO-DO

    //filteration
    //let ppl = PERSONS.map (({name, age}) => { console.log(name); console.log(age);})

    //try one
    let p = new Promise((resolve,reject)=>{

      let PERSONS,Age = 45;

      if(Age == 45)
      {
          resolve('Found');
      }
      else{
          reject('Not found');
      }
})

p.then((check)=>{
    console.log("Age is found in the list")
}).catch((er)=>{
    console.log("Age is not found in the list")
})

//another try
function PERSONS(Age) {
    for (let i = 16; Age > i; i++) {
      if (Age > 45) {
        return false;
      }
    }
    return Age < 45;
  }
  console.log(PERSONS.filter(PERSONS));
})();
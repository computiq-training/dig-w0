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
  
  // solve
  const solve = function (PERSONS, target) {
    return firstPromise = new Promise((resolve, reject) => {
      let result = PERSONS.filter(function (el) {
          if (el) return el.age == target;
        });
      
        if (result.length > 0) {
          resolve(result);
        } else {
          reject("data not found !!");
        }
        });
  };
   solve(PERSONS, 45)
     .then((res) => console.log(res))
     .catch((e) => console.log(e));
  
})();
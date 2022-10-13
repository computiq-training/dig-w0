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
    var filtered = PERSONS.filter(Boolean);
    let target=45;
let p = new Promise((resolve,reject)=>{
      const arr=filtered.filter(item => item.age==target);
      let s= (arr.length > 0)? resolve(arr):reject('age not found');
})
// using the promise
p.then((val)=>{ // Resolved
    console.log(val)
}).catch((err)=>{ //rejected
    console.log(err)
})
})();
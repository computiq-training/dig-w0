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
    const function_ = (names,target=45)=>{
        return promis = new Promise((resolve,reject)=>{
            const ageFilter = names.filter(person=>person && person.age == target);
            result.length>0 ? resolve(ageFilter) 
            : reject("error")
        });
    }
    function_(PERSONS,1).then(result => console.log(result)
    ).catch(error => console.log(error)
    ).finally(() => console.log("Done"));
})();
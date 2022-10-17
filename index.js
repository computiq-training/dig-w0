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
    let agefilter = (info, type) => {
        let prom = new promise (resolve, reject) => {
            let filteredage = info.filter(person => {
                if (person) return person.age === type;
            })
            if (filteredage.length >0) resolve(filteredage);
            else reject("Unknown");
            
            prom.then(val= console.log(val))
            .catch (val = console.log(error))
        }
    }
    agefilter(PERSONS, 45)
})();
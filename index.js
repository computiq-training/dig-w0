(async  ()=>{
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

    function filterPeople (data, condition) {
        const p = new Promise ((resolve, reject) => {
            let filteredPeople = data.filter(person => {
                if (person) {
                    
                    return person.age === condition
                }
            })
            if(filteredPeople.length > 0) {
                resolve(filteredPeople)
            }
            else {
                reject("erorr")
            }
        })

        p.then((val)=>{ 
            console.log(val)  })
        .catch((err)=>{ 
             console.log(err) })
    }

    filterPeople(PERSONS, 45)

})()


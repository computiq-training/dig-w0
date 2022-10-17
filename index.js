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

    const lookUp = (pers, Target = 5)=>{
        return p = new Promise((resolve,reject)=>{
            const filteredPersons = pers.filter(p => p && p.age == Target);
            if (filteredPersons.length > 0){
                resolve(filteredPersons)
            }
            else{
                reject("error")
            }
        });
    }
        lookUp(PERSONS,45)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    })();
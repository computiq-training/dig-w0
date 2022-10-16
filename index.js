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

    const locPerson = (pers, Target = 16)=>{
        return pro = new Promise((resolve,reject)=>{
            const user = PERSONS.filter(PERSONS => PERSONS && PERSONS.age === Target);

            if (user){
                resolve(user)
            }
            else{
                reject("No person with this age was found")
            }
        });
        
    }
    
    locPerson().then((res) => { 
        console.log(res)
    }) 
    .catch((error) => {
        console.log(error)
    })
    
})();


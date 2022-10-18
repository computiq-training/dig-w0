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
    const locate = (pers, Target = 45)=>{
        return p = new Promise((resolve,reject)=>{
            const filteredpersons = pers.filter(person => person && person.age == Target);
            if (filteredpersons.length >0){
                resolve(filteredpersons)
            }
            else{
                reject("error")
            }
        });
        
    }
    
    locate(PERSONS,45).then((result) => {console.log(result)}) 
    .catch((error) => {console.log(error)})
    
})();

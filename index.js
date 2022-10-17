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
    // console.log('This is first change')
//     const Promise = new Promise((resolve , reject) => {
//         Data && data.age === condition (edited)
                    
//     })
// })();

const lookUp = (pers, Target = 5)=>{
    return p = new Promise((resolve,reject)=>{
        const filteredpersons = pers.filter(person => person && person.age == Target);
        if (filteredpersons.length > 0){
            resolve(filteredpersons)
        }
        else{
            reject("error")
        }
    });
}


    lookUp(PERSONS,5).then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})

})();
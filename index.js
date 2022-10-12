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
    const myFilter = (names, myAge)=>{
        const myPromis = new Promise((resolve, reject) =>{
            let result = names.filter(ele=>{
                return ele? ele.age == myAge ? ele: '': ''
            })
            if(result){
                resolve(result);
            }
            else {
                reject('Not Find...');
            }
        })
        
        myPromis.then(
            (resolveValue)=>console.log(resolveValue)
        ).catch((err)=>{console.log(err)
        })
        .finally(()=>console.log('The Promis Is Done...'));
    }
    myFilter(PERSONS,45);
})();
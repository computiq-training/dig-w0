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
    function filterfind(key){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
              if(key.name==='Ali Hasan' && key.age>=45){
                resolve(key);
              }  
              else{
                reject('promise is rejected')
    
              }
            }, 1);
        });   
    }
    function find(){
        return Promise.all(PERSONS.filter(filterfind));
    }
    
})();
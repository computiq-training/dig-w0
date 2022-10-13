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
    
    
    const filter = function(data,condition){
       
        return  new Promise ((resolve, reject) => {
            
            hh = data.filter(data => data && data.age == condition);
           
            if (hh.length > 0){
                resolve(hh)
            } else {
                reject('not found')
            }     
        })
        .then(r => 
            console.log(r) 
        ).catch(err=> console.log(err))   
    }
        filter(PERSONS, 45);    
})()
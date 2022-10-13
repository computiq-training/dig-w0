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
    
    // Start My Code
    function getByAge(list , target_age) {
        
        return new Promise((resolve,reject)=>{
        
            if ((newList = list.filter(item => item !== undefined).filter(item => item.age == target_age)))
            {
                resolve('Execution Success');
            } else {
                reject('Execution Failed');
            }
        })
        
        .then((value)=>{ // Resolved
            console.log("Message :", value) // just to confirm
            if (newList.length > 0){
                return newList;
            }else{
                return "List Is Empty From Target Age";
            }
        })
        
        .catch((error)=>{ //rejected
            return "An Error Occurred ^_^ ... \n" + error;
        })
        
    }
    
    const return_list = await getByAge(PERSONS, 45);
    console.log("Return List :", return_list);

    // End My Code

})();
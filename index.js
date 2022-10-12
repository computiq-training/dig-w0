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
    // const promis = new Promise((resolve,reject)=>{

    // })


    const fun1 =(list1, target1)=>{
        return promis = new Promise((resolve,reject)=>{
    //    let final_list=[]
            final_list= list1.filter(p => p && p.age == target1)
            // console.log(final_list)
           
            // (final_list.length > 0)? resolve(final_list): reject("err");


            if (final_list.length > 0) {
                resolve(final_list);
              } else {
                reject("err");
              }
            

    })
    

    }
    
    fun1(PERSONS, 4).then(result=>console.log(result)).catch(err=> console.log(err))
    fun1(PERSONS, 45).then(result=>console.log(result)).catch(err=> console.log(err))


    

   


    // TO-DO
    // Promise object/function here
    // 2 params, 1: list, 2: target to match
    // return: Promise, resolve: list after filteration, reject: error message
    // TO-DO
})();


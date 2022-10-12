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
    undefined ,
        {
            name:'Ali Hasan',
            age:45
        }
    ];

    let p=new Promise((res,error)=>{
        let target =16;
        
       let b= PERSONS.filter((item)=>{
     
 if((item)&&(item.age==target))
 return item;
    } )
    if(b.length>0)res(b); else error('invalid target');
} )
    
  p.then((res)=>{
    console.log(res);
  })
  .catch((err)=>{console.error(err);
})
  
})();
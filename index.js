(async () => {
    console.log('App Started');
    const PERSONS = [
        {
            name: 'Ahmed Ali',
            age: 20
        },
        {
            name: 'Saif Amer',
            age: 19
        },
        {
            name: 'Marwan Ali',
            age: 30
        },
        {
            name: 'Ameer Qais',
            age: 16
        },
        {
            name: 'Nabeel Fawzi',
            age: 45
        },
        undefined
        ,
        {
            name: 'Ali Hasan',
            age: 45
        }
    ];
    // TO-DO
    // Promise object/function here
    // 2 params, 1: list, 2: target to match
    // return: Promise, resolve: list after filteration, reject: error message
    // TO-DO
    let filterFun = PERSONS.filter((x) => x && x.age == 45)
    let p = new Promise((resolve, reject) => {

        if (filterFun.length > 0) {
            resolve(filterFun)
            console.log("yes")
        } else {
            reject("Error")
            console.log("Error")
        }
    })

    const success = (persons) => {
        console.log(persons)
    }
    const notSuccess = () => {
        console.log("notSuccess")
    }
    p.then(success).catch(notSuccess)


})();


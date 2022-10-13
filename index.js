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

    //solution😎

    let target = 45;
    let melad = PERSONS.filter(function (PERSON) {
        return PERSON !== undefined && PERSON.age == target;
    });
    const p = new Promise((resolve, reject) => {
        if (melad != 0)
            resolve(melad)
        else
            reject("error message")
    })
    p.then((val) => console.log(val))
        .catch((err) => console.log(err))
})();
const myFunction = (async () => {
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

    return PERSONS;
})();


async function filter(PERSONS, toMatch) {
    var filtered = [];
    var p = Promise.resolve(PERSONS);

    p.then((lst) => {
        lst.forEach((e) => {
            if (e) {
                if (e.age === toMatch) {
                    filtered.push(e);
                }
            }
        });
    })
    return Promise.resolve(filtered)
        .then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })

}

console.log(filter(myFunction, 45));
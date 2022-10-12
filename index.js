
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

    filteringPersonsAges(PERSONS, 30)
        .then((res) => console.log(res))
        .catch((e) => console.log(e))

})();

function filteringPersonsAges(list, age) {
    let p = new Promise((resolve, reject) => {

        var results = list.filter(function (person) {
            // console.log(person)
            if (person) {
                return person.age >= age
            }
        }
        );
        if (results.length != 0) {
            resolve(results);
        }
        else {
            reject('there is no persone with same age!!!');
        }
    })
    return p
}

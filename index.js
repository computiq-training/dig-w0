(async () => {
  console.log("App Started");
  const PERSONS = [
    {
      name: "Ahmed Ali",
      age: 20,
    },
    {
      name: "Saif Amer",
      age: 19,
    },
    {
      name: "Marwan Ali",
      age: 30,
    },
    {
      name: "Ameer Qais",
      age: 16,
    },
    {
      name: "Nabeel Fawzi",
      age: 45,
    },
    undefined,
    {
      name: "Ali Hasan",
      age: 45,
    },
  ];
  // TO-DO
  // Promise object/function here
  // 2 params, 1: list, 2: target to match
  // return: Promise, resolve: list after filtration, reject: error message
  // TO-DO

  //sol
  const solPromis = new Promise((filtration, reject) => {
    let newPerson = PERSONS.filter((person) => person != undefined);
    const sol = newPerson.map((element) => {
      return JSON.parse(element.age > 0 ? element.age : null);
    });

    if (sol.length > 0) {
      filtration(sol);
    } else {
      reject("there is no result in filtered array");
    }
  });
  solPromis.then(
    (filter) => {
      console.log(filter);
    },
    (reject) => {
      console.log(reject);
    }
  );
})();

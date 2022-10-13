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
  // return: Promise, resolve: list after filteration, reject: error message
  // TO-DO
  
  
  // This is my function
  function filter(arr, target) {
    return new Promise((resolve, reject) => {
        let filterd = arr.filter(x => x !== undefined && x.age == target);
        filterd.length > 0 ? resolve(filterd) :reject("Not Found");
    });
  }
  
  // This is my function call
  filter(PERSONS, 20)
    .then((result) => {
      console.log("Success!", result);
    })
    .catch((error) => {
      console.log("Error!", error);
    });
})();

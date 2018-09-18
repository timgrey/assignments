var peopleArray = [
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },{
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ];  

  function sortedOfAge(arr){
    arr = arr.filter( x => x.age > 17)
    arr = arr.sort( (a,b) => a.lastName.localeCompare(b.lastName));
    return arr.map(x => x = "<li>" + x.firstName + " " + x.lastName + " is " + x.age + "</li>" )
  }

  console.log(sortedOfAge(peopleArray));

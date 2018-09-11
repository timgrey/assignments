var form = document.querySelector("form");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = this.firstName.value.toString();
    var lastName = this.lastName.value.toString();
    var age = this.age.value;
    var gender = this.querySelector("input[name=gender]:checked").value;
    var location = this.location.value;
    
    var dietOptions = this.querySelectorAll("input[name=diet]:checked")
    var dietsChecked = []

    for (var i=0; i<dietOptions.length; i++) {
        dietsChecked.push(dietOptions[i].value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + dietsChecked + "\nAwesome, now if you die, it won't be an accident..");

});
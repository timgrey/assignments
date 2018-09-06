var travelForm = document.querySelector("form")

travelForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("button pushed");
    var name = this.firstname.value + " " + this.lastname.value;
    var age = this.age.value
    var gender = this.querySelector("input[name=gender]:checked").value;
    var location = this.location.value;
    
    var dietOptions = document.querySelectorAll("input[name=diet]:checked")
    var dietsChecked = []
    for (var i=0; i<dietOptions.length; i++) {
        dietsChecked.push(dietOptions[i].value);
    }
    dietsChecked = dietsChecked.join(", ")
    alert("Name: " + name + "\nAge: " + age +  "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + dietsChecked);
})
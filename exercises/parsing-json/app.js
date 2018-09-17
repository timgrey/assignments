var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        pokemon = jsData.objects[0].pokemon;
        console.log(pokemon);
        for (var i = 0; i < pokemon.length ; i++) {
        document.getElementById("list").innerHTML += pokemon[i].name + "<br>"
        }
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send();
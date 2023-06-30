function $3_1() {
    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"]
    window.alert(
        "const games = [\"The Last of Us\", \"Uncharted\", \"God of War\", \"Bloodborne\"]\n" +
        "games.indexOf(\"God of War\") --> " + games.indexOf("God of War") 
    )
}

function createMap(arr) {
    return new Map(arr)
}
  
const myArray = [ ["Name", "John"] , ["Age", 30] , ["City", "Colombo"] ]
const myMap = createMap(myArray)

function $3_2() {
    document.write(
        "function createMap(arr) { <br>" +
            "&emsp;return new Map(arr) <br>" +
        "} <br> <br> " +
        "const myArray = [ [\"Name\", \"John\"] , [\"Age\", 30] , [\"City\", \"Colombo\"] ] <br>" +
        "const myMap = createMap(myArray) <br> <br> "
    )
    for (var [key, value] of myMap) {
        document.write(key + " : " + value + " <br> ")
    }
} 

function remove(map, key) {
    map.delete(key)
    return map
}

function $3_3() {
    document.write(
        "function remove(map, key) { <br>" +
            "&emsp;map.delete(key) <br>" +
            "&emsp;return map<br>" +
        "} <br> <br> " +
        "remove(myMap, \"Age\") <br> <br> "
    )

    remove(myMap, "Age")
    for (var [key, value] of myMap) {
        document.write(key + " : " + value + " <br> ")
    }
}


function $3_4() {
    const myMap2 = new Map()
    myMap2.set("apple", 5)
    myMap2.set("banana", 3)
    myMap2.set("orange", 2)

    document.write(
        "const myMap2 = new Map() <br>" +
        "myMap2.set(\"apple\", 5) <br>" +
        "myMap2.set(\"banana\", 3) <br>" +
        "myMap2.set(\"orange\", 2) <br><br>" 
    )
    document.write("myMap2.get(\"banana\")  -->  " + myMap2.get("banana") + "<br><br>")
    document.write("myMap2.size  -->  " + myMap2.size)
}

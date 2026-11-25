let myMap = new Map();

//Add a key-value pair to the map, with a key of "name" and a value of "John". 

myMap.set("name", "John")

//Add another key-value pair to the map, with a key of "age" and a value of 22.

myMap.set("age", 22)

myMap.forEach((val,key) => {

    console.log(key, " - ", val)

})
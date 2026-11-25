let myArray = ["Jack","Jill",4,5,true,"John"]

for (const [index, value] of Object.entries(myArray)) {

  console.log(index, " - ", value);

}
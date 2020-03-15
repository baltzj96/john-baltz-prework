const studentList=['John', 'Danielle', 'Lauren'];

for(let i=0; i<3; i++){
    const name=prompt("Enter a new name: ");
    studentList.push(name);
}
for(let i=0; i<studentList.length; i++) // iterates through the array
{
    const name=studentList[i]; // stores indices of the array into the local variable, name
    console.log(name); //  console logs each element of the array
}
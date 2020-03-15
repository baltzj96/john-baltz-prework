/* 
    JavaScript Basic Assessment Part 3--Note that prompts and alerts will be displayed when web browser is launched
*/
const userInput=prompt('Enter your name: ');

if(userInput.length > 4){
    alert('Your name is greater than four characters');
}
else{
    alert('Your name is less than 4 characters.');
}
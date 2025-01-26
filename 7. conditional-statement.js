//? conditional statement
//? if statement
//? if else statement
//? switch statement


//! example 01 (if statement)
// if a person age is equal to 20 or greater than 20 so he/she can vote other cannot allowed 

// let age = 17
// if (age >= 18){
//     console.log('you can vote ...!');
    
// }else{
//     console.log('your age is less than 18.');
    
// }

//! example 02 (if else statement)
// if mode of screen is light than set to dark and also vise versa

// let mode = 'light';
// let color;

// if(mode === 'dark'){
//     color = 'black';
// }else if(mode === 'light'){
//     color = 'white';
// }
// console.log('your screen color is now : ',color);


//! example 03 (if else statement)
// if a number is divide by 2 and remender is 0 than this number is even but if remander is 1 than this number is odd

// let number = prompt('enter a number to check..')
// if(number%2 === 0){
//     console.log('this number is even');
// }else{
//     console.log('the number is odd');
    
// } 


//! example 04 (if else statement)
// traffic light : if traffic light is now green than anyone can continous driving if traffic light is yellow than ready for driving but if light is red than cars needs to stop.

// let traffic_light = prompt('enter traffic light color')
// if(traffic_light === "red"){
//     console.log('you needs to stop the car');
// } else if(traffic_light === "yellow"){
//     console.log('ready for driving');
    
// }else if(traffic_light === "green"){
//     console.log('you can go');
    
// }
// else{
//     console.log('invalid color');
    
// }


//! example 05 (switch statement)
// traffic light : if traffic light is now green than anyone can continous driving if traffic light is yellow than ready for driving but if light is red than cars needs to stop.

// let traffic_light = prompt('enter traffic light color..')
// switch (traffic_light){
//     case 'green':
//         console.log('you can go.');
//         break;
//     case 'yellow':
//         console.log('ready to go');
//         break;
//     case 'red':
//         console.log('you needs to stop');
//         break;
//     default:
//         console.log('invalid traffic light');
// }

function scuberGreetingForFeet(greetingFeet){
let result
if (greetingFeet <= 400) {
  result = 'This one is on me!';}
  else if(greetingFeet <= 2000) 
    result = `That will be twenty bucks.`;
    else if(greetingFeet <= 2500) 
    result = 'I will gladly take your thirty bucks.';
    else if(greetingFeet > 2500)
    result = 'No can do.';
return result}


function ternaryCheckCity(city){
 return city === "NYC" ? "Ok, sounds good." : 'No go.';  
}

function switchOnCharmFromTip(tip)
 const tip = "Generous";
 switch(tip) {
   case 'Generous':
   console.log('Thank you so much.');
   break;
   case 'notGenerous':
   console.log('Thank you.');
  break;
  default:
    console.log('Bye');

}

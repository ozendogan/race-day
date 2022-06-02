/*
Race Day

Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this: 

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.


*/




let raceNumber = Math.floor(Math.random() * 1000);

let earlyRace = true; 

let adultRunners = 19;
let youthRunners = 6;

if (adultRunners > 18 && earlyRace == true){
  console.log("You will be race at 9.30 and your race number is",raceNumber+1000);
}else if (adultRunners > 18 && earlyRace ==false){
  console.log("You will be race at 11.00 and your race number is",raceNumber+1000);
}else if (youthRunners <= 18 && earlyRace == true || earlyRace == false) {
  console.log("You will be race at 12:40 pm and your race number is",raceNumber);
}








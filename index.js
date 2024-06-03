#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to IB Coding School");
console.log("Guest Verification Center");
let myLoop = true;
let myInvitedGuestsList = ['ali', 'ahmed', 'tarique', 'madad', 'ayaz', 'fayaz', 'manzoor', 'illahibux'];
while (myLoop) {
    let userInput = await inquirer.prompt({
        type: 'input',
        name: 'userName',
        message: 'Please enter your name'
    });
    let guestName = userInput.userName;
    // let {userName} = userInput; // destructuring
    // console.log(guestName);
    let lowerGuestName = guestName.toLowerCase();
    if (myInvitedGuestsList.includes(lowerGuestName)) {
        console.log(`Welcome Mr. ${guestName}! please, make yourself comfortable`);
        myLoop = false;
    }
    else {
        console.log(`\nSorry, Mr. ${guestName}. Your name is not on the guest list for today.\n`);
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'otherName',
            message: 'Do you have another name you go by? if so, we can check again!',
            default: false
        });
        if (!askNameAgain.otherName) {
            myLoop = false;
            console.log(`\nWe apologize, but you are not on the guest list. Please contact the event organizer.\n`);
        }
    }
}

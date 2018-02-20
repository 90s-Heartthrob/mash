'use strict';

// const storyApplication = ['This is somthing' + ' and this is somthing else'];
const storyInfo = [' CRUSH', ' LOCATION', ' VEHICLE', ' JOB'];

const story = document.getElementById('crush');
console.log(story);
function populate() {
    for (let i = 0; i < storyInfo.length; i++ ){
        story.textContent += storyInfo[i];
    }
};

populate();


const summaryOne = 'I guess you chose ' + storyInfo[0] + '. Which is cool. Not so bad as you live in a ' + storyInfo[1] + '. Have a functional & sensible ' + storyInfo[2] + '. You also work as a ' + storyInfo[3] + '.';

const summaryTwo = 'OH NO!! You married ' + storyInfo[0] + '. You baught & live in a' + storyInfo[1] + '. Also have to drive a ' + storyInfo[2] + ', to your damn job as a ' + storyInfo[3] + '.';

const summaryThree = 'Oh yeah you end up with ' + storyInfo[0] + '. When you\'re not working you spend you time at home in a ' + storyInfo[1] + '. Also get to drive your ' + storyInfo[2] + '. Which is the best way to get to work where you\'re a ' + storyInfo[3] + '.';


const story1 = document.getElementById('story');
story1.textContent = summaryOne;

const story2 = document.getElementById('story');
story1.textContent = summaryTwo;

const story3 = document.getElementById('story');
story1.textContent = summaryThree;

// story1.addEventListener('click', function() {
//     this.style.color = 'red'
// } )

function getRandomInt(max = 9) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt);

getRandomInt();
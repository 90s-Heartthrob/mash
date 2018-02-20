'use strict';

const storyApplication = ['This is somthing' + ' and this is somthing else'];
const storyInfo = [' CRUSH', ' LOCATION', ' VEHICLE', ' JOB']

const story = document.getElementById('crush');
console.log(story);
function populate() {
    for (let i = 0; i < storyInfo.length; i++ ){
        story.textContent += storyInfo[i]
    }
};

populate();


let summary = "You live with " + storyInfo[0] + " in a " + storyInfo[1] + ". You drive a " + storyInfo[2] + " and your profession is " + storyInfo[3] + "."


const story1= document.getElementById('story');
story1.textContent = summary;

story1.addEventListener('click', function() {
    this.style.color = 'red'
} )

function getRandomInt(max = 9) {
    return Math.floor(Math.random() * Math.floor(max));
    console.log(getRandomInt);
  }

  getRandomInt();


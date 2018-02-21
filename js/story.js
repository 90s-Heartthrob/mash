'use strict';

const story = {
    house: 'home',
    crush: 'You',
    location: 'here',
    car: 'bike',
    job: 'Dev',
    // story: document.getElementById('crush'),
    // console.log(story);
    populate: function () {
        // for (let i = 0; i < 4; i++ ){
        //     this.story.textContent += this.storyInfo[i];
        // }
        const story1 = document.getElementById('story');
        const p = document.createElement('p');
        const summaryOne = 'I guess you chose ' + this.crush + '. Which is cool. Not so bad as you live in a ' + this.house + ' in ' + this.location + '. Have a functional & sensible ' + this.car + '. You also work as a ' + this.job + '.';
        p.textContent = summaryOne;
        story1.appendChild(p);
    },




// const summaryTwo = 'OH NO!! You married ' + storyInfo[0] + '. You baught & live in a' + storyInfo[1] + '. Also have to drive a ' + storyInfo[2] + ', to your damn job as a ' + storyInfo[3] + '.';

// const summaryThree = 'Oh yeah you end up with ' + storyInfo[0] + '. When you\'re not working you spend you time at home in a ' + storyInfo[1] + '. Also get to drive your ' + storyInfo[2] + '. Which is the best way to get to work where you\'re a ' + storyInfo[3] + '.';


// const story1 = document.getElementById('story');
// story1.textContent = summaryOne;

// const story2 = document.getElementById('story');
// story1.textContent = summaryTwo;

// const story3 = document.getElementById('story');
// story1.textContent = summaryThree;

// story1.addEventListener('click', function() {
//     this.style.color = 'red'
// } )

    getData: function () {
        this.crush = JSON.parse(localStorage.getItem('crushData'));
        this.location = JSON.parse(localStorage.getItem('locationData'));
        this.car = JSON.parse(localStorage.getItem('carData'));
        this.job = JSON.parse(localStorage.getItem('jobData'));
        this.house = JSON.parse(localStorage.getItem('houseData'));
    }
};

story.getData();
story.populate();


    function getRandomInt(max = 9) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    console.log(getRandomInt);
    
    getRandomInt();

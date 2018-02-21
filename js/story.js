'use strict';

const story = {
    house: 'home',
    crush: 'You',
    location: 'here',
    car: 'bike',
    job: 'Dev',

    getData: function () {
        this.crush = JSON.parse(localStorage.getItem('crushData'));
        this.location = JSON.parse(localStorage.getItem('locationData'));
        this.car = JSON.parse(localStorage.getItem('carData'));
        this.job = JSON.parse(localStorage.getItem('jobData'));
        this.house = JSON.parse(localStorage.getItem('houseData'));
    },

    getRandomInt: function(max = 3) {
        const randomNumer = Math.floor(Math.random() * Math.floor(max));
        console.log(randomNumer);
        return randomNumer;
    },

    populate: function () {
        // const num = this.getRandomInt();
        const story1 = document.getElementById('story');
        const p = document.createElement('p');
        const summaryOne = 'I guess you chose ' + this.crush + '. Which is cool. Not so bad as you live in a ' + this.house + ' in ' + this.location + '. Have a functional & sensible ' + this.car + '. You also work as a ' + this.job + '.';
        // const summaryTwo = 'OH NO!! You married ' + this.crush + '. You baught & live in a' + this.house + ' in ' + this.location + '. Also have to drive a ' + this.car + ', to your damn job as a ' + this.job + '.';
        // const summaryThree = 'Oh yeah you end up with ' + this.crush + '. When you\'re not working you spend you time at home in a ' + this.house + ' in ' + this.location + '. Also get to drive your ' + this.car + '. Which is the best way to get to work where you\'re a ' + this.job + '.';
        p.textContent = summaryOne;
        story1.appendChild(p);
    }







// const story1 = document.getElementById('story');
// story1.textContent = summaryOne;

// const story2 = document.getElementById('story');
// story1.textContent = summaryTwo;

// const story3 = document.getElementById('story');
// story1.textContent = summaryThree;

// story1.addEventListener('click', function() {
//     this.style.color = 'red'
// } )

};

story.getData();
story.populate();



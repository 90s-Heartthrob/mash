'use strict';

const story = {
    house: ' ',
    crush: ' ',
    location: ' ',
    car: ' ',
    job: ' ',

    getData: function () {
        this.crush = JSON.parse(localStorage.getItem('crushData'));
        this.location = JSON.parse(localStorage.getItem('locationData'));
        this.car = JSON.parse(localStorage.getItem('carData'));
        this.job = JSON.parse(localStorage.getItem('jobData'));
        this.house = JSON.parse(localStorage.getItem('houseData'));
    },

    getRandomInt: function() {
        const min = Math.ceil(1);
        const max = Math.floor(3);
        const randomNumer = Math.floor(Math.random() * (max - min + 1)) + min;;
        return randomNumer;
    },

    populate: function () {
        story.getData();

        const num = this.getRandomInt();
        console.log(num);

        const story1 = document.getElementById('story');
        const p = document.createElement('p');

        if (num === 1) {
            const summaryOne = 'I guess you chose ' + this.crush + '. Which is cool. Not so bad as you live in a ' + this.house + ' in ' + this.location + '. Have a functional & sensible ' + this.car + '. You also work as a ' + this.job + '.';
            p.textContent = summaryOne;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryOne));
        } else if (num === 2) {
            const summaryTwo = 'OH NO!! You married ' + this.crush + '. You bought & live in a ' + this.house + ' in ' + this.location + '. Also have to drive a ' + this.car + ', to your damn job as a ' + this.job + '.';
            p.textContent = summaryTwo;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryTwo));
        } else {
            const summaryThree = 'Oh yeah you end up with ' + this.crush + '. When you\'re not working you spend you time at home in a ' + this.house + ' in ' + this.location + '. Also get to drive your ' + this.car + '. Which is the best way to get to work where you\'re a ' + this.job + '.';
            p.textContent = summaryThree;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryThree));
        }
    }
};

story.populate();




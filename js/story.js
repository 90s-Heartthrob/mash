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
            const summaryOne = 'So you ended up with ' + this.crush + ', whatever. Which is cool, I guess. Not so bad as you live in a ' + this.house + ' in ' + this.location + '. You get to and from your job as a '  + this.job + ' via a functional & sensible ' + this.car + '.';
            p.textContent = summaryOne;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryOne));
            const audio = document.createElement('audio');
            audio.setAttribute('src', 'music/story1.mp3');
            audio.setAttribute('autoplay', '');
            story1.appendChild(audio);
            audio.style.display = 'none';
        } else if (num === 2) {
            const summaryTwo = 'I got some bad news, you married ' + this.crush + '. You bought and live in a ' + this.house + ' with no windows, but at least you live in ' + this.location + '. Every day you get around in a ' + this.car + ', which always breaks down on your way to your damn job as a ' + this.job + '.';
            p.textContent = summaryTwo;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryTwo));
            const audio = document.createElement('audio');
            audio.setAttribute('src', 'music/story2.mp3');
            audio.setAttribute('autoplay', '');
            story1.appendChild(audio);
            audio.style.display = 'none';
        } else {
            const summaryThree = 'Oh yeah you end up with ' + this.crush + '! Congrats! When you\'re not working you spend you time at home in a three story ' + this.house + ' in ' + this.location + '. You cruise around town in your ' + this.car + '. Which is the best way to your dream job as a ' + this.job + '.';
            p.textContent = summaryThree;
            story1.appendChild(p);
            localStorage.setItem('pastStory', JSON.stringify(summaryThree));
            const audio = document.createElement('audio');
            audio.setAttribute('src', 'music/story3.mp3');
            audio.setAttribute('autoplay', '');
            story1.appendChild(audio);
            audio.style.display = 'none';
        }
    }
};

story.populate();
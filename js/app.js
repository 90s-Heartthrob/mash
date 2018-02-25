'use strict';

const gameObj = {
    masterArray: [],
    mashArray: ['Mansion', 'Apartment', 'Shack', 'House'],
    crush: [],
    location: [],
    car: [],
    job: [],
    tally: 3,

    start: function () {
        const form = document.querySelector('form');
        form.addEventListener('submit', function() {
            event.preventDefault();
            // instead of that for loop, we can assign the arrays you made directly to gameObj's properties
            gameObj.crush = [this.crush1.value, this.crush2.value, this.crush3.value];
            gameObj.location = [this.location1.value, this.location2.value, this.location3.value];
            gameObj.car = [this.car1.value, this.car2.value, this.car3.value];
            gameObj.job = [this.job1.value, this.job2.value, this.job3.value];

            gameObj.store();
            gameObj.masterArray = gameObj.masterArray.concat(gameObj.mashArray, gameObj.crush, gameObj.job, gameObj.location, gameObj.car);

            const futureButton = document.getElementById('future');
            futureButton.removeAttribute('class', 'hidden');

            const spinner = document.getElementById('swirl');
            spinner.setAttribute('class', 'spin');
        });
    },
    store: function () {
        const randomNumber = function() {
            const randNum = Math.floor(Math.random() * (3));
            return randNum;
        };


        const randomHouse = this.mashArray[randomNumber()];
        const randomCrush = this.crush[randomNumber()];
        const randomLocation = this.location[randomNumber()];
        const randomCar = this.car[randomNumber()];
        const randomJob = this.job[randomNumber()];
        localStorage.setItem('houseData', JSON.stringify(randomHouse));
        localStorage.setItem('crushData', JSON.stringify(randomCrush));
        localStorage.setItem('locationData', JSON.stringify(randomLocation));
        localStorage.setItem('carData', JSON.stringify(randomCar));
        localStorage.setItem('jobData', JSON.stringify(randomJob));

        /*
            This block of code is dying to be DRYed out! 
            We could write a function that takes an array and key, selects a random element, and saves it to localStorage.
            Something like:

            function saveRandom (array, key) {
                const randomItem = array[randomNumber()];
                localStorage.setItem(key, JSON.stringify(randomItem));
            }

            Then call:

            saveRandom(this.mashArray,'houseData');
            saveRandom(this.crush,'crushData');
            ..etc

            It would end up being a similar amount of lines, but the difference is 
            that we encapsulated the behavior we were doing over and over again
            making it easier for us to add more topic arrays later!
        */
    }
};

gameObj.start();
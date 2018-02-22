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
            const crushArray = [this.crush1.value, this.crush2.value, this.crush3.value];
            const locationArray = [this.location1.value, this.location2.value, this.location3.value];
            const carArray = [this.car1.value, this.car2.value, this.car3.value];
            const jobArray = [this.job1.value, this.job2.value, this.job3.value];
            for (let i = 0; i < crushArray.length; i++) {
                gameObj.crush.push(crushArray[i]);
                gameObj.location.push(locationArray[i]);
                gameObj.car.push(carArray[i]);
                gameObj.job.push(jobArray[i]);
            }
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
    }
};


gameObj.start();
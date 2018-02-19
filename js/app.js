'use strict';

// const crush = ['crush1', 'crush2', 'crush3'];
// const location = ['location1', 'location2', 'location3'];
// const car = ['uInput1', 'uInput2', 'uInput3',];
// const job = ['uInput1', 'uInput2', 'uInput3'];


const gameObj = {
    crush: [],
    location: [],
    car: [],
    job: [],
    Tally: 0,

    start: function () {
        const form = document.querySelector('form');
        form.addEventListener('submit', function() {
            event.preventDefault();
            const crushArray = [this.crush1.value, this.crush2.value, this.crush3.value];
            const locationArray = [this.location1.value, this.location2.value, this.location3.value];
            const carArray = [this.car1.value, this.car2.value, this.car3.value];
            const jobArray = [this.job1.value, this.job2.value, this.job3.value];
            console.log(crushArray, locationArray, carArray, jobArray);
            gameObj.crush.push(crushArray);
            gameObj.location.push(locationArray);
            gameObj.car.push(carArray);
            gameObj.job.push(jobArray);
            gameObj.storeData();
        });

    },
    
    storeData: function () {
        localStorage.setItem('crushData', JSON.stringify(this.crush));
        localStorage.setItem('locationData', JSON.stringify(this.location));
        localStorage.setItem('carData', JSON.stringify(this.car));
        localStorage.setItem('jobData', JSON.stringify(this.job));
    }
    
};



gameObj.start();


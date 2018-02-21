'use strict';

// const crush = ['crush1', 'crush2', 'crush3'];
// const location = ['location1', 'location2', 'location3'];
// const car = ['uInput1', 'uInput2', 'uInput3',];
// const job = ['uInput1', 'uInput2', 'uInput3'];


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

    // cross: function () {
    //     while (this.masterArray.length > 0) {
    //         let i = 1;
    //         const index = (i * this.tally) - i;
    //         const crossOff = this.masterArray[index];
    //         while (index < this.masterArray.length) {
    //             if (this.mashArray.includes(crossOff) && this.mashArray.length > 1) {
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 const mashArrayCrossIndex = this.mashArray.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 this.mashArray.splice(mashArrayCrossIndex, 1);
    //                 i++;
    //                 console.log(this.mashArray);
    //             } else if (this.crush.includes(crossOff) && this.crush.length > 1) {
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 const crushCrossIndex = this.crush.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 this.crush.splice(crushCrossIndex, 1);
    //                 i++;
    //                 console.log(this.crush);
    //             } else if (this.location.includes(crossOff) && this.location.length > 1) {
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 const locationCrossIndex = this.location.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 this.location.splice(locationCrossIndex, 1);
    //                 i++;
    //                 console.log(this.location);
    //             } else if (this.car.includes(crossOff) && this.car.length > 1) {
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 const carCrossIndex = this.car.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 this.car.splice(carCrossIndex, 1);
    //                 i++;
    //                 console.log(this.car);
    //             } else if (this.job.includes(crossOff) && this.job.length > 1) {
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 const jobCrossIndex = this.job.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 this.job.splice(jobCrossIndex, 1);
    //                 i++;
    //                 console.log(this.job);
    //             } else if (this.mashArray.length === 1 && this.masterArray.includes(this.mash[0])) {
    //                 localStorage.setItem('houseData', JSON.stringify(this.mashArray[0]));
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 i++;
    //             } else if (this.crush.length === 1 && this.masterArray.includes(this.crush[0])) {
    //                 localStorage.setItem('crushData', JSON.stringify(this.crush[0]));
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 i++;

    //             } else if (this.location.length === 1 && this.masterArray.includes(this.location[0])) {
    //                 localStorage.setItem('locationData', JSON.stringify(this.location[0]));
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 i++;

    //             } else if (this.car.length === 1 && this.masterArray.includes(this.car[0])) {
    //                 localStorage.setItem('jobData', JSON.stringify(this.job[0]));
    //                 const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
    //                 this.masterArray.splice(masterArrayCrossIndex, 1);
    //                 i++;

    //             } else {
    //                 i = 1;
    //             }
    //             console.log(gameObj.masterArray);
    //         };
    //     }
};


gameObj.start();
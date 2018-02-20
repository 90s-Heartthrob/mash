'use strict';

// const crush = ['crush1', 'crush2', 'crush3'];
// const location = ['location1', 'location2', 'location3'];
// const car = ['uInput1', 'uInput2', 'uInput3',];
// const job = ['uInput1', 'uInput2', 'uInput3'];


const gameObj = {
    masterArray: [],
    mashArray: ['M', 'A', 'S', 'H'],
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
            gameObj.masterArray = gameObj.masterArray.concat(gameObj.mashArray, gameObj.crush, gameObj.job, gameObj.location, gameObj.car);
            gameObj.storeData();
            // gameObj.cross();
        });
    },
    cross: function () {
        let i = 1;
        while (this.masterArray.length > 0) {
            const index = (i * this.tally) - i;
            const crossOff = this.masterArray[index];
            if (this.mashArray.includes(crossOff) && this.mashArray.length > 1) {
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                const mashArrayCrossIndex = this.mashArray.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
                this.mashArray.splice(mashArrayCrossIndex, 1);
                console.log(this.mashArray);
            } else if (this.crush.includes(crossOff) && this.crush.length > 1) {
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                const crushCrossIndex = this.crush.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
                this.crush.splice(crushCrossIndex, 1);
                console.log(this.crush);
            } else if (this.location.includes(crossOff) && this.location.length > 1) {
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                const locationCrossIndex = this.location.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
                this.location.splice(locationCrossIndex, 1);
                console.log(this.location);
            } else if (this.car.includes(crossOff) && this.car.length > 1) {
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                const carCrossIndex = this.car.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
                this.car.splice(carCrossIndex, 1);
                console.log(this.car);
            } else if (this.job.includes(crossOff) && this.job.length > 1) {
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                const jobCrossIndex = this.job.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
                this.job.splice(jobCrossIndex, 1);
                console.log(this.job);
            } else if (this.mashArray.length === 1) {
                localStorage.setItem('houseData', JSON.stringify(this.mashArray[0]));
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
            } else if (this.crush.length === 1) {
                localStorage.setItem('crushData', JSON.stringify(this.crush[0]));
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);

            } else if (this.location.length === 1) {
                localStorage.setItem('locationData', JSON.stringify(this.location[0]));
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);

            } else if (this.car.length === 1) {
                localStorage.setItem('jobData', JSON.stringify(this.job[0]));
                const masterArrayCrossIndex = this.masterArray.indexOf(crossOff);
                this.masterArray.splice(masterArrayCrossIndex, 1);
            } else {
                continue;
            }
            i++;
            console.log(gameObj.masterArray);
        }

    },

    storeData: function () {
        localStorage.setItem('crushData', JSON.stringify(this.crush));
        localStorage.setItem('locationData', JSON.stringify(this.location));
        localStorage.setItem('carData', JSON.stringify(this.car));
        localStorage.setItem('jobData', JSON.stringify(this.job));
    }

};

gameObj.start();
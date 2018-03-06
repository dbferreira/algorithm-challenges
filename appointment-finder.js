var expect = require('expect.js');

function getStartTime(schedules, duration) {
    const toSeconds = (time) => new Date('1970-01-01T' + time + 'Z').getTime() / 1000;
    const toTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 5);
    const secsDuration = duration * 60;
    let availability = [];
    for (var i = 0; i < schedules.length; i++) {
        const appointments = schedules[i];
        let personAvailability = [];
        for (var j = 0; j < appointments.length; j++) {
            const startSecs = toSeconds(appointments[j][0]);
            const endSecs = toSeconds(appointments[j][1]);
            personAvailability.push({
                start: startSecs,
                end: endSecs,
                duration: endSecs - startSecs
            });
        }
        availability.push(personAvailability);
    }
    console.log(availability);

    for (var i = 0; i < availability.length; i++) {
        var element = array[i];
        
    }


    return null;
}

var schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

expect(getStartTime(schedules, 90)).to.be(null);
expect(getStartTime(schedules, 60)).to.be('12:15');

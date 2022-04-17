const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass will happen at ${datetime} for ${duration} seconds`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('no worky broski', error);
  }
  printPassTimes(passTimes);

});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('no bueno', error);
//     return;
//   }

//   console.log('It worked, returned IP: ', ip);
// });

// fetchCoordsByIP('37.19.212.179', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// const coords = { latitude: '43.6227', longitude: '-79.3892' }

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log('still not working', error);
//     return;
//   }

//   console.log('Here are the flyover times: ', passTimes)
// })

module.exports = { printPassTimes };
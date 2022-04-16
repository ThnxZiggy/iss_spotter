const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('no worky broski', error)
  }
  console.log(passTimes)

})

fetchMyIP((error, ip) => {
  if (error) {
    console.log('no bueno', error);
    return;
  }

  console.log('It worked, returned IP: ', ip);
});

fetchCoordsByIP('37.19.212.179', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const coords = { latitude: '43.6227', longitude: '-79.3892' }

fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log('still not working', error);
    return;
  }

  console.log('Here are the flyover times: ', passTimes)
})


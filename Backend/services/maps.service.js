const axios = require('axios');

module.exports.getAddressCordinate = async (address) => {
  const apikey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apikey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apikey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origin=${encodeURIComponent(
    origin
  )}&key=${apikey}`;

  try{
    const response = await axios.get(url);
    if(!response.data.status === 'ok'){
      if(response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS'){
        throw new Error('No routes found')
      }
      return response.data.rows[ 0 ].elements[ 0 ]
    }else{
      throw new Error('Unable to fetch distance and time')
    }
  }
};

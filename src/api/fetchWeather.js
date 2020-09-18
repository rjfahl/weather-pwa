import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9976a2d25ec6a3f7cac32e9e86d4c48b';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, { params: {
        q: query,
        units: 'imperial',
        APPID: API_KEY,
    }});

    return data;
}

export const getNotification = (subscription) => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(registration) {
          if (!registration.pushManager) return;
    
          registration.pushManager.getSubscription().then(sub => {
            if (sub) axios.post(`${process.env.REACT_APP_API_URL}/notifications`, sub);
          })
        })
        .catch(e => console.error('An error ocurred during Service Worker registration.', e))
    }
}
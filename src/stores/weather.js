import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key: "4d9d855382ce8b6daed5001c62a8ac71",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    location: "",
    weather: {},
  }),
  getters: {},
  actions: {
    async fetchWeather() {
      try {
        const response = await axios.get(`${this.baseUrl}`, {
          params: {
            q: this.location,
            appid: this.api_key,
            units: 'metric'
          }
        });
        this.weather = {
          location: response.data.name,
          description: response.data.weather[0].description,
          temperature: response.data.main.temp,
        };
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
  },
});

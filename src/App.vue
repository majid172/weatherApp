<script setup>
import {useWeatherStore} from './stores/weather';
const weatherStore = useWeatherStore();
</script>

<template>
  <div class="container">
    
    <div class="row justify-content-center">
      <div class="col-md-6 mt-5">
        <div class="card p-3 ">
          <h5 class="text-success text-center">Weather App</h5>
          <input type="text" class="form-control" v-model="weatherStore.location" @keypress="weather.fetachValue">
         <button type="submit" class="btn btn-sm btn-danger mt-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

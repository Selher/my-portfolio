<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Navigation/>
    <RouterView />
    <Footer></Footer>
</div>



</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

html {
  scroll-behavior: smooth;
}

.container {
 
  margin: 0 auto;
}


</style>

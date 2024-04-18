<template>
    
        <div id="app">
            <div class="lacabra-card">

            <div class="card-column">
                <h3>Design & Development</h3>
                <p>Website for La Cabra</p>
                <p>This project is my first website I designed and coded from scratch, for an assignment. I used Adobe XD to design it and i used Visual Studio Code to code.</p>
            </div>
                <div class="card-column">
                    <img class="lacabra-img-1" src="../assets/lacabra-img-1.png" alt="">
                    <img class="lacabra-img-2" src="../assets/lacabra-img-2.png" alt="">
                </div>

            </div>
        </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

.lacabra-card{
    background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  padding: 20px; /* Padding inside the card */
  margin: auto;
  border: black 2px solid;
  max-width: 70%;
  display: flex;
  justify-content: space-between;
}
.card-column{
    width: 50%;
}
.lacabra-img-1{
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
}
.lacabra-img-2{
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>
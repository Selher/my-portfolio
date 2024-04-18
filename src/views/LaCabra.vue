<template>
    
        <div id="app">
            <div class="lacabra-card">

            <div class="card-column">
                <h3>Design & Development</h3>
                <p>Website for La Cabra</p>
                <p class="p1">This project was my first website I designed and coded from scratch, for an assignment. I used Adobe XD to design it and i used Visual Studio Code to code.</p>
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
  margin: 50px auto;

  border: black 2px solid;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
}
.card-column{
    width: 50%;
}

h3{
    display: inline-block;
        font-size: 30px;
        margin-bottom: 30px;
        width: auto;
        
}

.p1{
    width: auto;
        line-height: 1.6;
        padding: 20px 20px 20px 0px;
        
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
    
}


@media screen and (max-width: 768px) {
  

  

    
    .lacabra-card {
    width: 100%; /* Full width for columns on smaller screens */
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: center;
  }
  .card-column {
    width: 100%; /* Full width for columns on smaller screens */
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px; /* Decrease font size for smaller screens */
    margin-bottom: 5px; /* Adjust margin for smaller screens */
  }

    .p1 {
        font-size: 16px; /* Decrease font size for smaller screens */
        padding:5px 0px 5px 0px;
    }
  
    .lacaabra-img-1 {
    width: 100%; /* Full width for images on smaller screens */
    }
  

}
</style>
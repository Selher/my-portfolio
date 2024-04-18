<template>
    
    <div id="app">
        <div class="trapholt-card">

        <div class="card-column">
            <h3>Content Creation</h3>
            <p>Invitation</p>
            <p class="p1">This invitation was made for EASV' school counslor' 50th birthday. It was made in Adobe InDesign and was designed to be a folder so it was printed on both sides</p>
        </div>
            <div class="card-column">
                <img class="trapholt-img-1" src="../assets/invitation-img-1.jpg" alt="">
                <img class="trapholt-img-2" src="../assets/invitation-img-2.jpg" alt="">
            </div>

        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.trapholt-card{
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

.trapholt-img-1{
width: 100%;
height: auto;
object-fit: cover;
margin-bottom: 10px;
}
.trapholt-img-2{
width: 100%;
height: auto;
object-fit: cover;

}


@media screen and (max-width: 768px) {





.trapholt-card {
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

/* .lacaabra-img-1 {
width: 100%; 
} */


}
</style>
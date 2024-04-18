<template>
    <main>
       <div class="image-text-container">
        <div class="image-box">
            <img class="me-img" src="../assets/me.jpg" alt="Your Image">
        </div>

        <div class="intro-text">
            <h1>Welcome</h1>
            <p class="p1">Hello! I'm Salma Hersi, and welcome to my portfolio. </p>  
            <p class="p1">As a dedicated multimedia design student, I thrive on pushing the boundaries of creativity and embracing innovative approaches. My journey in multimedia design is fueled by a profound passion for content creation and front-end development, where each project serves as a canvas for me to blend imagination with technical proficiency.</p>
            <p class="p1">Join me as I embark on a quest to transform ideas into captivating digital experiences that resonate with audiences.</p>
            <button class="top-button" @click="scrollToAbout">MORE ABOUT ME</button>
        </div>
    </div>
    <!-- Project afsnit -->
<div id="project" class="projet-section">
    <div class="projects">
      <h2>PROJECTS</h2>
    </div>

    
            <div class="card-container">
            
                <div class="project-card">
                <h3>Design & Development</h3>
                <p>Website for La Cabra</p>
                <img class="lacabra-img-1" src="../assets/lacabra-img-1.png" alt="">
                <img class="lacabra-img-2" src="../assets/lacabra-img-2.png" alt="">
                <router-link to="/lacabra"> <!-- Specify the path to the details view -->
    <button class="see-more-button">SEE MORE</button>
  </router-link>
                <!-- <button class="see-more-button">SEE MORE</button> -->
                </div>

                <div class="project-card">
                <h3>Design & Development</h3>
                <p>Website for Trapholt</p>
                <img class="trapholt-img-1" src="../assets/trapholt-img-1.png" alt="">
                <img class="trapholt-img-2" src="../assets/trapholt-img-2.png" alt="">
                <button class="see-more-button">SEE MORE</button>
                </div>

                <div class="project-card">
                <h3>Content Creation</h3>
                <p>Infographics for Trapholt</p>
                <img class="infographic-img-1" src="../assets/infographic-img-1.png" alt="">
                <img class="infographic-img-2" src="../assets/infographic-img-2.png" alt="">
                <button class="see-more-button">SEE MORE</button>
                </div>

                <div class="project-card">
                <h3>Content Creation</h3>
                <p>Sustainia Poster</p>
                <img class="sustainia-img-1" src="../assets/sustainia-img-1.JPEG" alt="">
                <img class="sustainia-img-2" src="../assets/sustainia-img-2.JPEG" alt="">
                <button class="see-more-button">SEE MORE</button>
                </div>

                <div class="project-card">
                <h3>Content Creation</h3>
                <p>Invitation</p>
                <img class="invitation-img-1" src="../assets/invitation-img-1.jpg" alt="">
                <img class="invitation-img-2" src="../assets/invitation-img-2.jpg" alt="">
                <button class="see-more-button">SEE MORE</button>
                </div>

                <div class="project-card">
                <h3>User Experience</h3>
                <p>ReOps App</p>
                <img class="repos-img" src="../assets/repos-img.png" alt="">
                <img class="repos-img" src="../assets/repos-img-2.png" alt="">
                <button class="see-more-button">SEE MORE</button>
                </div>
            </div>

</div>


<!-- About section -->

<div id="about" class="about">
      <h2>ABOUT</h2>
    </div>

<div class="about-card">

    <div class="card-column">
        <h3>More about who i am</h3>
        <p>I am deeply enthusiastic about design and web development. I love the whole creative journey, from coming up with ideas to finishing a project. Collaborating within a team environment is something I cherish greatly, as it allows me to contribute and thrive alongside like-minded individuals.I'm super curious about everything around me, I thoroughly enjoy meeting new people, exchanging thoughts, and most importantly, working together to bring forth remarkable creations. This curiosity also drives me to keep learning new skills and staying up-to-date with the latest trends. This curiosity also drives me to keep learning new skills and staying up-to-date with the latest trends. 
        </p>
        <p>Want to know more you're welcome to read my CV below or click and watch my video cv</p>
        <button class="cv-button">DOWNLOAD CV</button>
        
    </div>
        <div class="card-column">
            <h3>Video introduction</h3>
            <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6X-jy1rCrCE"
            frameborder="0"
            allowfullscreen
            ></iframe>
        </div>

    </div>
    
    <!-- Contact section -->
    <div id="contact" class="contact">
      
        <div class="contact">
            <h2>CONTACT</h2>
        </div>

        <div class="contact-card">
            <div class="card-column-contact">
                
                    <div class="contact-black-box">
                        <h4 class="get-in-touch">Get in touch</h4>
                        <p class="contact-p">
                            I would love to hear from you ! 
                           
                        </p>
                        <p class="contact-p">
                            
                            If you have any questions or would like to work together, feel free to contact me. I'm always open to new opportunities and collaborations.
                            
                        </p>
                        <p class="contact-p">
                           
                            Let's work together to bring your vision to life !
                        </p>
                    </div>
                
            </div>  

            

            <div class="card-column-contact-1"> <!-- make this into links and add icons -->
                
                <h3 class="contact-info">
                    Contact information
                </h3>

                <p class="contact-links">
                    +45 20917773
                </p>
                <p class="contact-links">
                    salma-hersi@hotmail.com
                </p>
                <p class="contact-links">
                    www.linkedin.com/in/salmahersi
                </p>
            </div>

            

        </div>

    </div>

    </main>
</template>
    
    <script setup>
    /* get to know me knappen */
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('.about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    
  
    </script>
    
    <style lang="scss" scoped>
    /* main{
       display: flex;
       flex-direction: row;
       align-items: center;
       max-width: 550px;
       margin: 0 auto;
       padding: 40px 16px; 

       ingen grund til at give din main en styles fordi den virker bedre uden.
           
    }  */ 
    .image-text-container{
        display: flex;
    }

     .intro-text{
       max-width: 50%;
        width: 50%;
        margin-right: auto;
        padding: 90px 90px;
         
       
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
    } 

    .image-box{
        width: 50%;
        height: auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        

        
     }
    .me-img{
        width: 50%;
        height: 250px;
        object-fit: cover;
         
     } 

     

    
    h1{
        font-size: 40px;
        margin-bottom: 25px;
        margin-left: 5%;
      
        
    }

    .p1{
        text-align: left;
        padding-bottom: 20px;
        width: auto;
        margin-left:5%;
        line-height: 1.6; 
    }


    .top-button{
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
        
        margin-left: 5%;
    }
    .top-button:hover{
        background-color: #333;
        color: white;
    }

    @media screen and (max-width: 768px) {
  

  h1 {
        font-size: 20px; /* Adjust font size for smaller screens */
    }

    .image-text-container {
        flex-direction: row;
    }

    .image-box {
    width: 100%; /* Full width for columns on smaller screens */
    
  }
    .intro-text{
        max-width: 100%;
        width: 100%;
        padding: 80px;
        margin-right: 0;
    }
  
    .p1 {
        font-size: 16px; /* Decrease font size for smaller screens */
        
    }
  

  .top-button {
    width: 100%; /* Make button full width on smaller screens */
    
  }

}

    /* Projects afsnit */

    .projects{
        margin-top: 100px;
        
    }
    h2{
        display: inline-block;
        font-size: 30px;
        margin-left: 15%;
        margin-bottom: 30px;
        border-bottom: 2px solid black;
    }

    .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Distribute cards evenly in the container */
  max-width: 70%;
  margin: auto;
    }

.project-card {
  width: calc(33.33% - 20px); /* Adjust width of each card */
  background-color: white;
  margin-bottom: 15px;
  padding: 20px;
  
  border: black 2px solid;
  
  
}
.lacabra-img-1{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.lacabra-img-2{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.trapholt-img-1{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.trapholt-img-2{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.infographic-img-1{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.infographic-img-2{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.sustainia-img-1{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.sustainia-img-2{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.invitation-img-1{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.invitation-img-2{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}
.repos-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}

.see-more-button{
    background-color: black;
        color: white;
        padding: 10px;
        border: none;
        
        
    }
    .see-more-button:hover{
        background-color: #333;
        color: white;
    }




@media screen and (max-width: 768px) {
  .project-card {
    width: calc(50% - 20px); /* Adjust width for smaller screens */
  }
  h2 {
        font-size: 20px; /* Adjust font size for smaller screens */
    }
}


/* About section */

h2{
        display: inline-block;
        font-size: 30px;
        margin-left: 15%;
        margin-bottom: 30px;
        margin-top:20px ;
        border-bottom: 2px solid black;
    }
.about{
    margin-top: 100px;

}
.about-card {
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
  padding: 20px; /* Padding inside the card */
  margin: auto;
  border: black 2px solid;
  max-width: 70%;
  display: flex;
  justify-content: space-between;
}

.card-column {
  width: 48%; 
}

.card-column h3 {
  margin-top: 0;
  margin-bottom: 5%; 
}

.card-column p {
     text-align: left;
        padding-bottom: 20px;
        width: auto;
        line-height: 1.6; 
}
.cv-button{
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
        
        
    }
    .cv-button:hover{
        background-color: #333;
        color: white;
    }

    
    @media screen and (max-width: 768px) {
  

  h2 {
        font-size: 20px; /* Adjust font size for smaller screens */
    }

    .about-card {
        flex-direction: column;
    }

    .card-column {
    width: 100%; /* Full width for columns on smaller screens */
    margin-bottom: 20px;
  }

  .card-column h3 {
    font-size: 18px; /* Decrease font size for smaller screens */
    margin-bottom: 5px; /* Adjust margin for smaller screens */
  }

    .card-column p {
        font-size: 16px; /* Decrease font size for smaller screens */
        
    }
  

  .cv-button {
    width: 100%; /* Make button full width on smaller screens */
    margin-top: 15px; /* Adjust margin for smaller screens */
  }

}


/* Contact section */
.contact{
    margin-top: 100px;
    
}
.contact-card {
    display: flex;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
    margin: auto;
    margin-bottom: 50px;
    border: black 2px solid;
    max-width: 70%;
    justify-content: space-between;
    

  
}

.card-column-contact {
    width: 48%;
   
}

.contact-black-box {
    background-color: black;
    color: white; 
    height: 350px;
    width: 100%;
    
}
.get-in-touch{
    display: inline-block;
    text-align: left;
    padding-bottom: 25px;
    padding-left: 20px;
    font-size: 30px;
    margin-top:50px ;
    
}




.contact-p{text-align: left;
        
        width: auto;
        line-height: 1.6;
        padding: 0px 20px 20px 20px;
        
}






.card-column-contact-1 {
    text-align: left;
        padding:20px;
        width: 400px;
        line-height: 1.6; 
        margin-top: 50px
        
}


.contact-links{
    text-align: left;
        padding-bottom: 20px;
        width: 400px;
        line-height: 1.6;
        
        margin-top: 10px;
}


@media screen and (max-width: 768px) {
    .contact-card {
        flex-direction: column;
    }
    h2 {
        font-size: 20px; /* Adjust font size for smaller screens */
    }

    .card-column-contact {
    width: 100%; /* Full width for columns on smaller screens */
    }
    
    .contact-column-contact-1{
        width: 100%;
    }
    
  
}
    </style>


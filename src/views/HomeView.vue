<template>
    <main>
       <div class="image-text-container">
        <div class="image-box">
            <img class="me-img" src="../assets/selfie.jpeg" alt="Your Image">
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
    <div class="project-container">
    <div id="app-2">
      <div class="project-row" v-for="projectCard in projectCard" :key="projectCard.id">
        <ProjectCard 
          :title="projectCard.title" 
          :description="projectCard.description"
          :image="projectCard.image"
        />
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
        <button class="cv-button" onclick="window.open('CVSH.pdf','_blank')">DOWNLOAD CV</button>
       
        
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
                        <div class="contact-text">
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
                
            </div>  

            

            <div class="card-column-contact-1"> <!-- make this into links and add icons -->
                
                <h3 class="contact-info">
                    Contact information
                </h3>
                
                <p class="contact-links">
                    <i class="fas fa-phone"></i>
                    +45 20917773
                </p>
                <p class="contact-links">
                    <i class="fas fa-envelope"></i>
                    salma-hersi@hotmail.com
                </p>
                <p class="contact-links">
                    <i class="fab fa-linkedin"></i>
                    www.linkedin.com/in/salher
                </p>
            </div>

            

        </div>

    </div>

    </main>
</template>
    
    <script >
    /* Ville gerne have haft endnu et billede men kunne ikke få det rigtigt. Jeg prøvede at bruge require() men det gad ikke indlæse det korrekt. Og billederne er ikke den korrekte størrelse, er det fordi jeg skal ændre størrelsen på dem inden jeg sætter dem ind? */
    import ProjectCard from '../components/ProjectCard.vue';
    import imageOne from '../assets/trapholt-img-1.png';
    import imageTwo from '../assets/lacabra-img-1.png';
    import imageThree from '../assets/sustainia-img-1.jpeg';
    import imageFour from '../assets/invitation-img-1.jpg';
    import imageFive from '../assets/infographic-img-1.png';
    import imageSix from '../assets/repos-img.png';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projectCard: [
        { 
          id: 1, 
          title: 'Trapholt', 
          description: 'Hjemmeside for Trapholt Museum i Kolding.',
          image: imageOne   
        },
        { 
          id: 2, 
          title: 'La Cabra', 
          description: 'Hjemmeside for La Cabra Coffee',
          image: imageTwo
        },
        { 
          id: 3, 
          title: 'Sustainia', 
          description: 'Plakat design for Sustainia, et skoleprojekt.',
          image: imageThree
        },
        {
          id: 4,
          title: 'Invitation',
          description: 'Invitation til skolens studievejleder',
          image: imageFour
        },
        {
          id: 5,
          title: 'Infographic',
          description: 'Trifolder til Trapholt Museum i Kolding',
          image: imageFive
        },
        {
          id: 6,
          title: 'Reops',
          description: 'Reops, en app prototype til faget UX',
          image: imageSix
        }
      ]
    };
  }
};




</script>





    
  
    
    <style lang="scss" scoped>
   
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
        height: 70vh;
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
    flex-direction: column; /* Change direction of flex container for smaller screens */

    }

    .image-box {
    display: none;
    
  }
  .me-img {
    display: none;
  }
    .intro-text{
        max-width: 100%;
        width: 100%;
        padding: 64.5px;
        margin-right: 0;
    }
  
    .p1 {
        font-size: 16px; /* Decrease font size for smaller screens */
        
    }
  

  

}

    /* Projects afsnit */



    .project-container {
        display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
.project-row {
    width:33.333% ;
}

#app-2 {
font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 5vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
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
  
    .about{
        margin-top: 50px;
        
    }

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

  .project-row {
    width: 50%; /* Full width for columns on smaller screens */
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
    height: 100%;
    width: 100%;
    
}
.get-in-touch{
    display: inline-block;
    text-align: left;
    
    padding: 20px 0px 0px 20px;
    font-size: 30px;
    
    
}

.contact-text{
    padding: 20px;
}

.contact-info{
    padding-bottom: 20px;
}

.contact-p{text-align: left;
        
        width: auto;
        line-height: 1.6;
        padding: auto;
        
}






.card-column-contact-1 {
    text-align: left;
        padding:20px;
        width: 48%;
        line-height: 1.6; 
        
               
}


.contact-links{
    text-align: left;
        padding-bottom: 25px;
        
        line-height: 1.6;
        
        
}


@media screen and (max-width: 768px) {
    .contact{
        margin-top: 50px;
        
    }
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


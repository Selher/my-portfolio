<template>
  
    <div class="project-card">
      <img :src="image" alt="Project Image" class="project-image" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
 
  </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      image: String
    }
  }
  </script>
  
  <style scoped>
  
  .project-card {
    height: 95%;
    width: auto;
    border: none;
    background-color: #ffffff;
    padding: 16px;
    margin: 16px;
   
    border: black 2px solid;
    box-shadow: 0 3px 6px #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  .project-image {
    
    width: 75%;
    height: 75%;
    
  }
  
  h2 {
    font-family: 'Times New Roman', Times, serif;
    color: #000000;
    margin-top: 8px;
  }
  
  p {
    font-family: open sans;
    color: #000000;
  }
  
  

  @media (max-width: 768px) {
    
  .project-card {
    width: calc(100% -32px); /* One card per row */
  }


    h2 {
        font-size: 1.2em;
      ;
    }

    p {
        font-size: 0.9em;
        
  

    }

}
  </style>
  
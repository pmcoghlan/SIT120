<template>
  <div class="about">
    <section class="about-me">
      <h2>About Me</h2>
      <img src="@/assets/COG0001.jpg" alt="Patrick Coghlan" class="profile-image" />
      <p>
        My Name is Patrick Coghlan, I am an aspiring IT Student currently studying a Bachelor of IT at Deakin University.
      </p>
      <p>
        In the past I have studied a Bachelor of Business (Music Industry), and a Bachelor of Business (Psychology).
      </p>
      <p>
        I graduated high school in 2019.
      </p>
      <p>
        I have worked in retail, hospitality, and trade and have done work experience for a prominent Melbourne video game developing studio.
      </p>
      <p>
        I would love to get into game design and development or software development. I want to provide people with fantastic experiences in Interactive Entertainment just like I have been provided with.
      </p>
      <p>
        My biggest inspirations are Japanese Developers such as those who work at Nintendo, Game Freak, ATLUS and SquareENIX to name a few.
      </p>
    </section>
  </div>
</template>

<script>
 
</script>

<style scoped>
  /* Import styles from the external CSS file */
  @import url('C:/Users/patri/OneDrive/Desktop/DEAKIN2023/Sem2/SIT120/1.3p/portfolioremade/style.css');


  /* Desktop Layout */
  .landing-page {
    text-align: center;
    padding: 20px;
  }

  .portfolio,
  .contact,
  .hand-execute,
  .javascript-coding { 
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
    display: inline-block;
  }


  .project-image,
  .small-project-image {
    max-width: 100%; /* Ensure the image fits within its container */
    height: auto; /* Maintain aspect ratio */
  }


  .project-description {
    font-style: italic;
    margin-top: 10px;
  }

  
  .project-images,
  .hand-execute-images,
  .javascript-coding-images { 
    display: flex;
    justify-content: space-between; /* Space images evenly */
    flex-wrap: wrap; /* Allow images to wrap to the next line if needed */
  }

  /* Media Query for Mobile Devices */
  @media screen and (max-width: 768px) {
    .portfolio,
    .contact,
    .hand-execute,
    .javascript-coding { 
      margin: 10px;
      padding: 10px;
    }
  }
</style>


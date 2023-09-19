<template>
  <div class="landing-page">
    <header>
      <semester-table></semester-table>
      <h1>Welcome to my Portfolio!</h1>
     
      <p>
        My Name is Patrick Coghlan, I am an aspiring IT Student currently studying a Bachelor of IT at Deakin University.
      </p>
      <p>
        Below here is some of my notable works I have done at University that I have chosen to include in this Digital Portfolio.
      </p>
    </header>
    <main>
      <br /><br />
      <section class="portfolio">
        <h2>Previous Projects</h2>
        
        <div class="project">
          <p class="project-description">Here is an example of a Database Program I created in Semester 1, detailing Knights, their age, their tools, and other information.</p>
          <img src="@/assets/Knightdatabase.png" alt="Knightdatabase" class="project-image" />
        </div>

        
        <div class="project-images">
          <img src="@/assets/KnightCode1.png" alt="KnightCode1" class="small-project-image" />
          <br /><br />
          <img src="@/assets/KnightCode2.png" alt="KnightCode2" class="small-project-image" />
        </div>
      </section>
      <br /><br />
   
      <section class="javascript-coding">
        <h2>JavaScript Coding</h2>
        <p>
          During semester 2 in SIT120, I learned how to code with JavaScript and create live websites rather than static ones, here is an example website I created.
        </p>
        
        <div class="javascript-coding-images">
          <img src="@/assets/JS1.png" alt="JS1" class="small-project-image" />
          <br /><br />
          <img src="@/assets/JS2.png" alt="JS2" class="small-project-image" />
        </div>
      </section>
      <br /><br />

      <section class="hand-execute">
        <h2>Learning Experience</h2>
        <p>
          Within 2023, I learned how to hand execute to run programs on paper to troubleshoot and see logic.
        </p>
       
        <div class="hand-execute-images">
          <img src="@/assets/HandExecute1.jpg" alt="HandExecute1" class="small-project-image" />
          <br /><br />
          <img src="@/assets/HandExecute2.jpg" alt="HandExecute2" class="small-project-image" />
        </div>
      </section>
      <br /><br />

      <section class="contact">
        <h2>Contact Me</h2>
        <p>
          pmcoghlan@deakin.edu.au
        </p>
        <p>
          SIT120 1.3P Patrick Coghlan 221306716
        </p>
        <contact-form></contact-form>
      </section>

      
    </main>
  </div>
</template>

<script>
  // Import statements and component configuration
</script>

<style scoped>
  /* Import styles from the external CSS file */
  @import url('C:/Users/patri/OneDrive/Desktop/DEAKIN2023/Sem2/SIT120/1.3p/portfolioremade/style.css');

  /* The rest of your component-specific styles */
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
  .javascript-coding-images { /* Added .javascript-coding-images class */
    display: flex;
    justify-content: space-between; /* Space images evenly */
    flex-wrap: wrap; /* Allow images to wrap to the next line if needed */
  }

  /* Media Query for Mobile Devices */
  @media screen and (max-width: 768px) {
    .portfolio,
    .contact,
    .hand-execute,
    .javascript-coding { /* Added .javascript-coding class */
      margin: 10px;
      padding: 10px;
    }
  }
</style>

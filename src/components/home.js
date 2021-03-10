import React from 'react';

function Home(props) {
    return(
        <div id="bground">
        <div className="personal">
          <h1 id="greetingDisplay"></h1>
          <div className="text">
            <h2>
              I'm Patrik, a full stack developer. I work with HTML, CSS, Javascript, React, MongoDB, Express, and Node.js.
            </h2>
            <h2>You can find my work and contact info at the links below.</h2>
            <h3>*</h3>
          </div>
        </div>
  
        <div className="contact">
          <ul>
            <li>
              <a href="#">blog<img class="icon" id="blog" src="public/book.svg" /></a>
            </li>
            <li>
              <a href="https://twitter.com/PatrikBeichner"
                >twitter<img class="icon" id="twitter" src="public/twitter.svg"
              /></a>
            </li>
            <li>
              <a href="https://github.com/PatrikBeichner">github<img class="icon" id="github" src="public/github.svg" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/patrik-b-974b34ab/"
                >linkedin<img class="icon" id="linkedin" src="public/linkedin.svg"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Home
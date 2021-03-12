import React from 'react';

function RenderStars(props) {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  console.log(vw, vh);

  let numStars = 23;
  const starfield = document.getElementById('bground');
  //run on load
  window.addEventListener('load', GenerateStars);

  function GenerateStars() {
    // event.stopPropagation;
    //create stars and place them randomly based on width and height
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('h3');
      star.innerHTML = '*';
      let randomTop = Math.floor(Math.random() * vh);
      let randomLeft = Math.floor(Math.random() * vw);

      //tests
      console.log(randomTop);
      console.log(randomLeft);

      //star styling
      star.style.top = randomTop + 'px';
      star.style.left = randomLeft + 'px';
      star.style.webkitAnimationDelay = Math.random() + 1 + 's';
      star.style.fontSize = Math.random() * (2 - 0.83) + 0.83 + 'em';

      //test
      console.log('stars');
      starfield.appendChild(star);
    }
  }
  return (
    <div>
      <GenerateStars />
    </div>
  )
}

function Greeting(props) {
  const greets = ['Hello,', 'Hej,', 'Salut,', 'Hallo,', 'Hola,', 'Privet,', 'Ciao,', 'Oi,', 'Witaj,', 'Hei,',];

  let randGreet = Math.floor(Math.random()*greets.length);

  return (
    <h1>{greets[randGreet]}</h1>
  )
}

function Home(props) {
  return (
    <div id="bground">
      <RenderStars />
      <div className="personal">
        <Greeting />
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
            <a href="#">
              blog
              <img class="icon" id="blog" src="book.svg" alt='blog icon'/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/PatrikBeichner">
              twitter
              <img class="icon" id="twitter" src="../twitter.svg" alt='twitter icon'/>
            </a>
          </li>
          <li>
            <a href="https://github.com/PatrikBeichner">
              github
              <img class="icon" id="github" src="github.svg" alt='github icon'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/patrik-b-974b34ab/">
              linkedin
              <img class="icon" id="linkedin" src="linkedin.svg" alt='linkedin icon'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

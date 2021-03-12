import React from 'react';

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

function RenderStars(num) {
//   const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//   const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  console.log(vw, vh);

  const numStars = 23;
  const starfield = document.getElementById('bground');
  //run on load
  window.addEventListener('load', GenerateStars(num));

//   function GenerateStars() { 
//     for (let i = 0; i < 23; i++) {
//       console.log('this is loop #: ' + i)
//       const starStyle = {
//         fontSize: Math.random() * (2 - 0.83) + 0.83 + 'em',
//         top: Math.floor(Math.random() * vh),
//         left: Math.floor(Math.random() * vw),
//         animationdelay: Math.random() + 1 + 's'
//     }
//       console.log(starStyle);
//       return (
//           <h3 style={starStyle}>*</h3>
//       )
//     }
//   }
//   return (
//     <div>
//       <GenerateStars />
//     </div>
//   )
};

function GenerateStars(num) {
    let i, result = new Array(num);
    for (i = 0, i <= num, i++) {
        // const starStyle = {
        //             fontSize: Math.random() * (2 - 0.83) + 0.83 + 'em',
        //             top: Math.floor(Math.random() * vh),
        //             left: Math.floor(Math.random() * vw),
        //             animationdelay: Math.random() + 1 + 's'
        // }
        result[i] = (
            <h3 style={starStyle}>*</h3>
        );
    }
    return result;
}

function Greeting(props) {
  const greets = ['Hello,', 'Hej,', 'Salut,', 'Hallo,', 'Hola,', 'Privet,', 'Ciao,', 'Oi,', 'Witaj,', 'Hei,',];

  let randGreet = Math.floor(Math.random()*greets.length);

  return (
    <h1>{greets[randGreet]}</h1>
  )
}

function Test(props) {
  return (
    <div id="bground">
      <RenderStars num={23}/>
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

export default Test;
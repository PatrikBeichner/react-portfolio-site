import React, { Component } from 'react';
// import Navbar from './../components/navbar';
import GenerateStars from './../components/GenerateStars'
import Greeting from './../components/Greeting'

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// function GenerateStars(num) {
//   const arr = [];
//   for (let i = 0; i <= 22; i++) {

//       let fs = Math.random() * (2 - 0.83) + 0.83 + 'em'; //fontsize
//       let tp = Math.floor(Math.random() * vh); //top
//       let lt = Math.floor(Math.random() * vw); //left
//       let ad = Math.random() + 1 + 's'; //delay

//     arr.push(
//     <h3 style={{
//         fontSize: fs,
//         top: tp,
//         left: lt,
//         animationDelay: ad,
//         }}
//     >*</h3>
//     );
//   }
//   console.log(arr)
//   return arr;
//   };


// function Greeting(props) {
//   const greets = ['Hello,', 'Hej,', 'Salut,', 'Hallo,', 'Hola,', 'Privet,', 'Ciao,', 'Oi,', 'Witaj,', 'Hei,',];

//   let randGreet = Math.floor(Math.random()*greets.length);

//   return (
//     <h1>{greets[randGreet]}</h1>
//   )
// }

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  };


  // shouldComponentUpdate(nextProps) {
  //   return false;
  // }
  render() {
    const { showModal } = this.state;
  return (
    <div>
    {/* <div className='blur'> */}
      {/* <Navbar /> */}
      {/* <div className='blur'> */}
      <GenerateStars />
      
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

    {/* <div>
      <button className='modal-toggle-button' onClick={this.toggleModal} >
        {!showModal ? 'Open Modal' : 'Close Modal'}
      </button>
      {
        showModal ? (
          <Modal>
            <h1>a modal</h1>
          </Modal>
        ) : null
      }
    </div> */}
    
      <div className="contact">
        <ul>
          <li className='homeLink'>
            <a href="/blog">
              blog
              <img class="icon" id="blog" src="book.svg" alt='blog icon'/>
            </a>
          </li>
          <li className='homeLink'>
            <a href="https://twitter.com/PatrikBeichner">
              twitter
              <img class="icon" id="twitter" src="../twitter.svg" alt='twitter icon'/>
            </a>
          </li>
          <li className='homeLink'>
            <a href="https://github.com/PatrikBeichner">
              github
              <img class="icon" id="github" src="github.svg" alt='github icon'/>
            </a>
          </li>
          <li className='homeLink'>
            <a href="https://www.linkedin.com/in/patrik-b-974b34ab/">
              linkedin
              <img class="icon" id="linkedin" src="linkedin.svg" alt='linkedin icon'/>
            </a>
          </li>
        </ul>
      </div>
    {/* </div> */}
    </div>
  );
  }
}

export default Home;

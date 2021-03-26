import React, { Component } from 'react';


class Stars extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 40;
    const arr = [];
    console.log('vh' + vh )
    console.log('vw' + vw )

  for (let i = 0; i <= 22; i++) {

      let fs = Math.random() * (2 - 0.83) + 0.83 + 'em'; //fontsize
      let tp = Math.floor(Math.random() * vh); //top
      let lt = Math.floor(Math.random() * vw); //left
      let ad = Math.random() * 9 + 's'; //delay

    arr.push(
    <h3 style={{
        fontSize: fs,
        top: tp,
        left: lt,
        animationDelay: ad,
        zIndex: 1,
        }}
    >*</h3>
    );
  }
  console.log(arr)
  return arr;
  }
}

export default Stars;



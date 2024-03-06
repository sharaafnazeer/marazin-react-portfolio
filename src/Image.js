import React from 'react';
import logo from './logo.svg';
const Image1 = () => {

    return (
       <>
       <div>Image 1</div>
       <img src={logo} className="App-logo" alt="logo" />
       </> 
    );


}

const Image2 = () => {

    return (
        <>
        <div>Image 2</div>
        <img src={logo} className="App-logo" alt="logo" />
        </> 
     );


}

export {Image1, Image2};
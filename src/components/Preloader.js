import React from 'react';
import preloader from '../images/preloader.svg';

let Preloader = (props) => {
  return (
    <div className='preloaderContainer'><img src={preloader} alt='preloader'/></div>
  )
}

export default Preloader;

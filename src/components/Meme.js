import React from 'react';
import memesData from '../data/memeData';
const Meme = () => {

  function getMeme (memeItem) {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main>

        <form action="" className="form">
            <input type="text"
                className='form--input'
                placeholder='Top Text' />
            <input type="text"
                className='form--input'
                placeholder='Bottom Text' />

            <button onClick={getMeme} className='form--button'>Get a new Meme Image 🖼</button>
        </form>
    </main>
  )
}

export default Meme
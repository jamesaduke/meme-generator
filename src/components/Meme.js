import React from 'react';
import memesData from '../data/memeData';
const Meme = () => {

  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // In this case the old value of state does not determine the new value of state
    setMemeImage(memesArray[randomNumber].url)
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

            <button onClick={getMemeImage} className='form--button'>Get a new Meme Image 🖼</button>
        </form>
        <img src={memeImage} className="meme--image" />
    </main>
  )
}

export default Meme
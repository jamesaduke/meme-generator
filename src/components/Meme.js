import React from 'react';

const Meme = () => {
  return (
    <main>

        <form action="" className="form">
            <input type="text"
                className='form--input'
                placeholder='Top Text' />
            <input type="text"
                className='form--input'
                placeholder='Bottom Text' />

            <button className='form--button'>Get a new Meme Image 🖼</button>
        </form>
    </main>
  )
}

export default Meme
import React from 'react'
import '../App.css'
import { useRef } from 'react'

export const Form = () => {

  const inputRef = useRef();

  const focusInput = () => {

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className='form__container'>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />

        <form>
          <input ref={inputRef} 
            placeholder='Ej: Jere' 
            type='text'   
          />
          <button onClick={focusInput} type='submit'>Submit</button>
        </form>
    </div>
  )

}

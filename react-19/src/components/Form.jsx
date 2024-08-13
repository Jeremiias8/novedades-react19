import React, { forwardRef } from 'react'
import '../App.css'
import { useRef } from 'react'

const Input = forwardRef(( props, ref ) => {
  return <input ref={inputRef} placeholder='Ej: Jeredev' type='text' />
})

Input.displayName = 'Input'

export function Form () {

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
          <Input ref={inputRef} />
          <button onClick={focusInput} type='submit'>Submit</button>
        </form>
    </div>
  )

}

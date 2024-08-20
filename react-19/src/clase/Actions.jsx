import React, { useState } from 'react'


export const Actions = () => {
 
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [result, setResult] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()

        setIsPending(true)

        const error = await updateName(name)
        setIsPending(false)

        if (error) {
            setError(error)
            setResult(false)
        } else {

            setResult(name)
            setError(null)
        }

    }

  return (
    <div>
        <form
            onSubmit={handleSubmit}
        >
            <input type='' placeholder='' autoFocus required />
        </form>
    </div>
  )

}

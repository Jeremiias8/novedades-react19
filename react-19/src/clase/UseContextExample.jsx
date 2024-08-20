
import { use } from 'react'
import { UserContext } from '../context/user'

export function UseContextExample ({ enabled = true }) {

    if (!enabled) return null

    const { name, isLogged, updateUser } = use(UserContext)

    return (
        <div>
            {

                isLogged ? (
                    <>
                        <p>Hey, {name}</p>
                        <button onClick={
                            () => updateUser({ name: null, isLogged: false })
                        }>
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <>
                        <p>Bienvenido</p>

                        <button onClick={
                            () => updateUser({ name: 'Jere', isLogged: true })
                        }>
                            Iniciar sesión
                        </button>
                    </>
                )

            }
        </div>
    )

}
import { Button } from './SocialButton'; 
import { Form } from './Formulario'


let icons ={
    facebook: 'fab fa-facebook-f',
    google: 'fab fa-google',
    twitter: 'fab fa-twitter',
    github: 'fab fa-github'

}

export const Registro = () => {
    return (
        <>
        
        <div className="card formulario">
        <div className="card-body">
        <h1>Crea una cuenta</h1>
            <Button icons={icons} />
        <h5>O usa tu mail para registrarte</h5>
        <Form />
        <alert/>
        </div>
        </div>
        
        </>
    )
}
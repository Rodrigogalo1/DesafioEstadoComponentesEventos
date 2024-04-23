
export const Form = () =>{
    return (

  
            <form action="">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label"></label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"></label>
                    <input type="email" className="form-control" id="email" placeholder="tuemail@ejemplo.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input type="password" className="form-control" id="password" placeholder="Contraseña"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm-password" className="form-label"></label>
                    <input type="password" className="form-control" id="confirm-password" placeholder="Confirma tu contraseña"/>
                </div>
                <button type="submit" className="btn btn-success">Registrarse</button>
            </form>



    )


}


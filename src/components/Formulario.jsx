import React, { useState } from 'react';

import Alert from './Alert';

export const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [alerta, setAlerta] = useState('');

    const validarInput = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
            setError(true);
            setAlerta('Debes completar todos los campos');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError(true);
            setAlerta('El formato del correo electrónico es incorrecto');
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            setAlerta('Las contraseñas no coinciden');
            return;
        }

       
        setTimeout(() => {
            setRegistroExitoso(true);
            setError(false);
            setAlerta('Registro exitoso');
        }, 1000);
    };

    return (
        <form action="" onSubmit={validarInput}>
           
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label"></label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    name="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label"></label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="tuemail@ejemplo.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label"></label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label"></label>
                <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    placeholder="Confirma tu contraseña"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success">Registrarse</button>
            {error && <Alert mensaje={alerta} />}
        </form>
    );
};
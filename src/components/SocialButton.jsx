
export const Button = () =>{

    const handleClick = (event) => {
        
        console.log('Icono clickeado:', event.target.className);
    };
    return (
        <>
            <div className="fontawesome">
                <i class="fa-brands fa-facebook" onClick={handleClick} ></i>
                <i className="fab fa-github" onClick={handleClick}></i>
                <i class="fa-brands fa-linkedin" onClick={handleClick}></i>
            </div>
        </>
    )
}
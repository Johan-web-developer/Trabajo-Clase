import image1 from '../assets/dropbox.png';
import image2 from '../assets/global.png'

function NavBar(){
    return(
        <nav>
            <div class="menu1">
             <img src={image1} alt="dropbox" width="30px" height="30px"/> 
            <h3>DropBox</h3>
            <a href="#">¿Por que dropbox?</a>
            <a href="#">Productos</a>
            <a href="#">Soluciones</a>
            <a href="#">Precios</a>
        </div>
        <div class="menu2">
            <img src={image2} alt="global" width="20px" height="20px"/> 
            <a href="#">Contacto</a>
            <a href="#">Obtener la aplicación</a>
            <a href="#">Registrarse</a>
            <a href="#">Iniciar Sesión</a>
            <button class="start">Comienza ahora</button>
        </div>
        </nav>
    )
}


export default NavBar;
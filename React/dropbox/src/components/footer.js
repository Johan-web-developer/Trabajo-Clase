function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>Acerca de Nosotros</h2>
              <p>Información sobre tu empresa y lo que hacen.</p>
            </div>
            <div className="footer-section contact">
              <h2>Contacto</h2>
              <p>Dirección de la empresa</p>
              <p>Teléfono de contacto</p>
              <p>Correo electrónico de contacto</p>
            </div>
            <div className="footer-section follow">
              <h2>Síguenos</h2>
              <p>Enlaces a tus perfiles en redes sociales</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 DropBox. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
import homepage from '../assets/Dropbox_Homepage.mp4';

function Section(){
    return(
        <section>
            <h1>Únete a los más de 700 millones <br /> 
                de usuarios registrados <br /> que confían en Dropbox
            </h1>
            <h5>
                Fácil de utilizar, confiable, privado y seguro. No es de extrañar que Dropbox sea la elección para almacenar <br />
                y compartir tus archivos más importantes
            </h5>
            <div className="plan">
                <button>Encuentra tu plan</button>
            </div>
            <div className="video">
            <video autoPlay muted loop>
        <source src={homepage} type="video/mp4" />
      </video>
            </div>
        </section>
    )
}

export default Section;

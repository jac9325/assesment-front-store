import React from 'react';
import './__About.scss';

function About() {
  return (
    <div className="main">
      <div className="main__imagen">
        <img src="imagen/foto.png" alt="Jaime Amilcar" />
      </div>
      <div className="main__datos">
        <div className="main__datos--title">Jaime Amilcar Catari Sinsaya</div>

        <div className="main__datos--description">
          La vida nos pone muchos retos, los cuales muchas veces nos pueden
          hacer caer, depende de nosotros es si nos hacemos mas fuertes o
          simplemente nos quedamos estancados. Gracias al equipo de Make It
          Real, que mas alla de un bootcam es una gran familia que te apoyan en
          todo lo que este en sus manos y jamas te dejan solo, y a mis
          compañeros de Eventops, GRANDES PERSONAS MUY CAPOS a los cuales nunca
          los olvidare y estaré siempre agradecido.
        </div>
        <div className="main__datos--category">
          Cosas que aprendi en Make It Real:
          <ul>
            <li>A desarrollar mis Habilidades de programación</li>
            <li>
              Trabajo y perseverancia para conseguir las metas que uno se
              propone.
            </li>
            <li>Habilidades Blandas e Ingles</li>
          </ul>
        </div>
        <div className="main__datos--personales">
          <span className="">
            Correo: <p>jac.s9325@gmail.com</p>
          </span>
        </div>
        <div className="main__datos--personales">
          <span className="">
            GitHub:
            <a
              href="https://github.com/jac9325"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/jac9325
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;

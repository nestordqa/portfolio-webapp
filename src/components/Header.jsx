import Hamburguer from '../assets/Hamburguer.jsx';
import CloseAside from '../assets/CloseAside.jsx'
import CodeLogo from '../assets/CodeLogo.jsx'
import { useState } from 'react';

function Header() {
  const links = [
    { id: 1, nombre: 'inicio', href: '#scrollspyHeading1' },
    { id: 2, nombre: 'Sobre Mi', href: '#scrollspyHeading2' },
    { id: 3, nombre: 'Habilidades', href: '#scrollspyHeading3' },
    { id: 4, nombre: 'Proyectos', href: '#scrollspyHeading4' },
    { id: 5, nombre: 'Contacto', href: '#scrollspyHeading5' }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav class="navbar navbar-expand-lg " style={{ backgroundColor: 'inherit' }}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <CodeLogo />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {!isOpen ? <Hamburguer /> : <CloseAside />}
          </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="d-flex navbar-nav">
              {links.map(link => (
                <li key={link.id} class="nav-item " >
                  <a class="nav-link text-light pt-0-lg pb-0-lg text-center " href={link.href}>{link.nombre}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

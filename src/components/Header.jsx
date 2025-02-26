import Hamburguer from '../assets/Hamburguer.jsx';
import CloseAside from '../assets/CloseAside.jsx'
import CodeLogo from '../assets/CodeLogo.jsx'
import { useState } from 'react';

function Header() {
  const links = [
    { id: 1, nombre: 'Home', href: '#scrollspyHeading1' },
    { id: 2, nombre: 'About me', href: '#scrollspyHeading2' },
    { id: 3, nombre: 'Skills', href: '#scrollspyHeading3' },
    { id: 4, nombre: 'Projects', href: '#scrollspyHeading4' },
    { id: 5, nombre: 'Contact me', href: '#scrollspyHeading5' }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'inherit' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <CodeLogo />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {!isOpen ? <Hamburguer /> : <CloseAside />}
          </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="d-flex navbar-nav">
              {links.map(link => (
                <li key={link.id} className="nav-item " >
                  <a className="nav-link text-light pt-0-lg pb-0-lg text-center " href={link.href}>{link.nombre}</a>
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

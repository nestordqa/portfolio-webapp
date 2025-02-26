
function Aside({ links }) {

  return (
    <>
      <section className='AsideSection'>
        <div className='AsideLinksContainer '>
          <ul>
            {links?.map(link => (
              <li key={link.id}>
                <a href={link.href}>{link.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='CopyRigth'>
          <p>© Copyright 2025 - Nestor Quinones.</p>
          <p>© Powered by Nestor Quinones.</p>
        </div>
      </section>
    </>
  )
}

export default Aside


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
          <p>© Copyright 2024 - RLN-CODE.</p>
          <p>© Powered by RLN-CODE.</p>
        </div>
      </section>
    </>
  )
}

export default Aside

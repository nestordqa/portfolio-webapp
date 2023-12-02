
function Aside({ links }) {

  return (
    <>
      <section className='AsideSection'>
        <div className='AsideLinksContainer '>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <a href={link.href}>{link.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='CopyRigth'>
          <p>© CopyRight 2022 - VL-CODE.</p>
          <p>© Powered by VL-CODE.</p>
        </div>
      </section>
    </>
  )
}

export default Aside

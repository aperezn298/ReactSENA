import React from 'react'
import './App.css'

export function TwitterFollowCard () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt='Avatar' src='https://unavatar.io/senacomunica'/>
        <div className='tw-followCard-info'>
          <strong>SENA Comunica</strong>
          <span className='tw-followCard-infoUserName'>@senaComunica</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button is-following">
          <span className='tw-followCard-text'>Seguir</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
import React from 'react'
import './App.css'

export function TwitterFollowCardComp ({ userName, name, initialIsFollowing}) {
  const follow = initialIsFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = initialIsFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}>
          <span className='tw-followCard-text'>{follow}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
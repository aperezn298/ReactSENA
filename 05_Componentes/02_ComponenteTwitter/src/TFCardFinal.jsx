import React, { useState } from 'react'
import './App.css'

export function TwitterFollowCardFinal ({ userName, name, initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const follow = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  
  const handleClick = () => { setIsFollowing(!isFollowing) }

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
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{follow}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
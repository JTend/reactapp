import React, { useEffect } from 'react';

const Card = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="card">
      <header>
        <h4>Photo: {props.photo.id}</h4>
        <h4>Album: {props.photo.albumId}</h4>
        <h4>{showText(props.photo.title)}</h4>
      </header>
      <section style={{backgroundImage : `url(${props.photo.url})`}}>
        <img src={props.photo.thumbnailUrl} alt={'photo'+props.photo.id}/>
      </section>
    </div>
  )
}

const showText = str => str.length > 50 ? str.slice(0, 50) + '...' : str;

export default Card;

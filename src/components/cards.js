import React, { useEffect, useState } from 'react';
import { URI } from '../context/rest';
import Card from './card';

const Cards = () => {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 24;

  useEffect(() => {
    fetch(URI).then(result => result.json()).then(json => {
      setInfo(json);
    }).catch(error => {
      console.log(error);
      setInfo([]);
    })
  }, []);
  
  return (
    <section>
      <Buttons size={info.length} pageSize={pageSize} page={page} setPage={setPage}/>
      <section>
        {
          info.length 
            ? info.slice(page*24, (page*24) + 24).map(e => <Card key={e.id} photo={e}/>) 
            : <h2>Loading...</h2>
        }
      </section>
      <Buttons size={info.length} pageSize={pageSize} page={page} setPage={setPage}/>  
    </section>
  )
}

const Buttons = props => {

  return (
    <nav>
      <button disabled={props.page === 0} onClick={() => props.setPage(0)}>&lt;&lt;</button>
      <button disabled={props.page === 0} onClick={() => props.setPage(props.page - 1)}>&lt;</button>
      <button>{props.page + 1}</button>
      <button disabled={props.page === (Math.ceil(props.size / props.pageSize) - 1)} onClick={() => props.setPage(props.page + 1)}>&gt;</button>
      <button disabled={props.page === (Math.ceil(props.size / props.pageSize) - 1)} onClick={() => props.setPage(Math.ceil(props.size / props.pageSize) - 1)}>&gt;&gt;</button>
    </nav>
  )
}

export default Cards;
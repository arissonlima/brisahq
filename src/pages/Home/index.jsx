import { useEffect, useState } from 'react';

import { ArrowUp } from 'phosphor-react';

import { Search } from '../../components/Search';
import { Card } from '../../components/Card';

import { Header, Content, TopButton } from './styles';

export function Home(){

  const [items, setItems] = useState([]);

  const timestamp = import.meta.env.VITE_TIMESTAMP;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_MD5;
  const limit  = 50;
  
  const api = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${md5}&limit=${limit}`;

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data  => setItems(data.data.results))
  }, []);
  
  return(
    <>
      <Header>
        <h2>Fique por dentro das novidades da Marvel</h2>
        {/* <Search /> */}
      </Header>
      <Content>
        {items.map(item => {
          return <Card item={item} key={item.id} />
        })}
      </Content>

      <a href="#">
        <TopButton>
          <ArrowUp size={22} />
        </TopButton>
      </a>
    </>
  );
}
import { useState } from 'react';

import { ModalInfo } from '../ModalInfo';

import { Container } from './styles';

export function Card(props){

  const charactersInfo = {
    id: props.item.id,
    title: props.item.title,
    isbn: props.item.isbn,
    edition: props.item.issueNumber,
    synopsis: props.item.description,
    thumbnail: props.item.thumbnail.path + '.' + props.item.thumbnail.extension,
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  return(
    <>
      <Container onClick={handleOpenModal}>
        <img loading="lazy" src={charactersInfo.thumbnail} alt={charactersInfo.title} title={charactersInfo.title} />
        <h2>{charactersInfo.title}</h2>
      </Container>

      <ModalInfo isOpen={isModalOpen} onRequestClose={handleCloseModal} charactersInfo={charactersInfo} />
    </>
  );
}
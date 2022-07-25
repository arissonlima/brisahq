import { Link } from 'react-router-dom';

import { Cart } from '../../pages/Cart';

import Modal from 'react-modal';

import { Container, Content } from './styles';;

export function ModalInfo({ isOpen, onRequestClose, charactersInfo }){

  return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
        ariaHideApp={false}
      >
        <Container>
          <img src={charactersInfo.thumbnail} />
          <Content>
            <h2>{charactersInfo.title}</h2>

            <h3>ISBN</h3>
            <span>{charactersInfo.isbn ? charactersInfo.isbn : 'ISBN not found.'}</span>

            <h3>Nº da Edição:</h3>
            <span>{charactersInfo.issueNumber ? charactersInfo.issueNumber : 'Edition not found.'}</span>

            <h3>Sinopse:</h3>
            <span className="description">{charactersInfo.synopsis ? charactersInfo.synopsis + '...': 'Synopsis not found.'}</span>

            <div className="buttons">
              <Link to="/cart"><button className="buy" type="button">Adquirir</button></Link>
              <button className="close" type="button" onClick={onRequestClose}>Fechar</button>
            </div>
          </Content>
        </Container>
      </Modal>
  );
}
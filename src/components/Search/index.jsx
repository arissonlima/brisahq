import { MagnifyingGlass } from 'phosphor-react';

import { Form } from './styles';

export function Search(){
  return(
      <Form>
        <input type="text" placeholder="Busque um título..." />
        <button type="button"><MagnifyingGlass size={22} /></button>
      </Form>
  );
}
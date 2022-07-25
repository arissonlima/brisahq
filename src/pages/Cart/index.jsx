import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container, Content, MapContent } from './styles';

const icon = Leaflet.icon({
  iconUrl: "./brisanet-icon.png",
  iconSize: [38, 38]
})

export function  Cart(){

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [myAddress, setMyAddress] = useState([]);

  const [position, setPosition] = useState([-5.1069725, -38.3838005]);
  const [newPosition, setNewPosition] = useState([]);

  const map_url = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: '',
    format: 'json',
    addressDetails: 'addressdetails'
  }

  const zoom = 15;

  function buy(e){
    e.preventDefault();
    console.log(name);

    // lati = myAddress[0].lat;
    // long = myAddress[0].lon;

    // setLatitude(lati);
    // setLongitude(long);
    
    // position = [setLatitude(lati), setLongitude(long)];
    // console.log('latitude', lati);
    // console.log('longitude', long);
    // console.log(long);
  }

  return(
    <Container>
      <Content>
        <h2>Meu carrinho</h2>

        <h3>Item:</h3>
        <span>Quadrinho do Homem Aranha</span>

        <form onSubmit={buy}>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome completo..." />
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Digite seu endereço..." />
          <button type="submit" onClick={() => {
            const params = {
              q: address,
              format: 'json',
              addressDetails: 1,
              polygon_geojson: 0,
            };

            const queryString = new URLSearchParams(params).toString();
            const requestOptions =  {
              method: 'GET',
              redirect: 'follow'
            };
            fetch(`${map_url}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result))
                setMyAddress(JSON.parse(result))
              })
              .catch((err) => console.log("err, ", err));

              console.log('inicial', myAddress[0].lat);
              console.log('inicial', myAddress[0].lon);

              setPosition([myAddress[0].lat, myAddress[0].lon]);

              console.log('alterado', myAddress[0].lat);
              console.log('alterado', myAddress[0].lon);

          }}>Comprar</button>
        </form>

      </Content>

      <MapContent>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer          
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=9WFebKyo4SzKO0H6sXG3"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Brisanet levando o mundo até você.
          </Popup>
        </Marker>
      </MapContainer>
      </MapContent>

    </Container>
  );
}
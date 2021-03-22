import React, { useEffect, useState } from 'react';
import Icon from '~/../../src/components/Icon/Icon';
import { PokemonService } from "~/../../src/services/pokemon";
import formatId from '~/../../src/common/utils/formatPokeId';

const PokedexItem = (props) => {

  const pokeService = new PokemonService();
  const [pokemon] = useState(props.param);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState([]);


  useEffect(() => {
    pokeService.getPokemonByName(pokemon).then(res => {
      setId(res.id);
      setImage(res.sprites.other["official-artwork"].front_default);
      // setImage(res.sprites.versions["generation-viii"].icons.front_default);
      setName(res.name);
      setType(res.types);
    })
  }, [pokemon]);

  return (
    <div className="pokemon-item-row">
      <span className="pokemon-id">#{formatId(id)}</span>
      <span className="pokemon-img">
        <img src={image} />
      </span>
      <span className="pokemon-name">{name}</span>
      <div className="pokemon-type-combo">
        {type.map((item, index) => {
          return (
            <span key={`pokemon-type-${index}`} className="pokemon-type">
              <Icon name={item.type.name} color={item.type.name} size={16} />
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PokedexItem;
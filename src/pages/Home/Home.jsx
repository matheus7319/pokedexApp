import React, { useEffect, useState } from 'react';
import PokedexList from '~/../../src/components/PokedexList/PokedexList';
import PokedexItem from '~/../../src/components/PokedexItem/PokedexItem';

import { Badge } from 'primereact/badge';
import { GenerationService } from "~/../../src/services/generation";
import { PokemonService } from "~/../../src/services/pokemon";

const Home = (props) => {

  const genService = new GenerationService();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    genService.getGeneration(1).then(res => {
      let sorted = res.sort((a, b) => {
        let itemA = a.url.split("/");
        let itemB = b.url.split("/");
        return itemA[itemA.length - 2] - itemB[itemB.length - 2];
      });
      setPokemon(sorted);
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <p>LEFT SIDE</p>
      </div>
      <div>
        <Badge value="2"></Badge>
        <PokedexList>
          {pokemon.map((item, index) => {
            return (
              <PokedexItem key={`pokemon-${index}`} id={item.name}></PokedexItem>
            )
          })}
        </PokedexList>
      </div>
    </>
  )
}

export default Home;
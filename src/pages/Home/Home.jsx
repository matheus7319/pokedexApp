import React, { useEffect, useState } from 'react';
import PokedexList from '~/../../src/components/PokedexList/PokedexList';
import PokedexItem from '~/../../src/components/PokedexItem/PokedexItem';
import { Button } from 'primereact/button';

import API from '~/../../src/environment/API';
import { PokemonService } from "~/../../src/services/pokemon";

const Home = (props) => {

  const pokeService = new PokemonService();
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState('offset=0&limit=15');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    setPokemon([]);
    // genService.getGeneration(1).then(res => {
    //   let sorted = res.sort((a, b) => {
    //     let itemA = a.url.split("/");
    //     let itemB = b.url.split("/");
    //     return itemA[itemA.length - 2] - itemB[itemB.length - 2];
    //   });
    //   setPokemon(sorted);
    // });
    pokeService.getPokemon(currentPage).then(res => {
      let next = res.next ? res.next.split("?") : '';
      let prev = res.previous ? res.previous.split("?") : '';

      setNextPage(next[1])
      setPrevPage(prev[1])
      setPokemon(res.results)
    });
  }, [currentPage]);

  const goNextPage = () => {
    setCurrentPage(nextPage);
  }

  const goPrevPage = () => {
    setCurrentPage(prevPage);
  }

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <p>LEFT SIDE</p>
      </div>
      <div>
        <PokedexList>
          {pokemon.map((item, index) => {
            return (
              <PokedexItem key={`pokemon-${index}`} param={item.name}></PokedexItem>
            )
          })}
        </PokedexList>
        <div className="pokemon-list-buttons">
          {prevPage && <Button icon="pi pi-caret-left" onClick={() => goPrevPage()} />}
          {nextPage && <Button icon="pi pi-caret-right" onClick={() => goNextPage()} />}
        </div>
      </div>
    </>
  )
}

export default Home;
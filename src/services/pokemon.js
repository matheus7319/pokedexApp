import axios from 'axios';
import API from '~/../../src/environment/API';

export class PokemonService {

  getPokemon(params) {
    return axios.get(`${API}/pokemon?${params}`)
      .then(res => {
        let dataRes = res.data;
        console.log(dataRes);
        return dataRes;
      })
  }

  getPokemonByName(id) {
    return axios.get(`${API}/pokemon/${id}`)
      .then(res => {
        let dataRes = res.data;
        return dataRes;
      })
  }
}
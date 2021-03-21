import axios from 'axios';
import API from '~/../../src/environment/API';

export class PokemonService {

  getPokemon() {
    return axios.get(`${API}/pokemon?limit=15&offset=0`)
      .then(res => {
        let dataRes = res.data;
        console.log(dataRes);
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
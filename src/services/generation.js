import axios from 'axios';
import API from '~/../../src/environment/API';

export class GenerationService {

  getGeneration(id) {
    return axios.get(`${API}/generation/${id}`)
      .then(res => {
        let dataRes = res.data.pokemon_species;
        return dataRes;
      })
  }
}
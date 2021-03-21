import React, { useEffect, useState } from 'react';
import { GenerationService } from "~/../../src/services/generation";

const Geracao = (props) => {

  const genService = new GenerationService();
  const [generation, setGeneration] = useState([]);

  useEffect(() => {
    genService.getGeneration(1);
  }, []);

  return (
    <div>
    </div>
  )
}

export default Geracao;
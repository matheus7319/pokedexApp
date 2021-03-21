import React, { useState, useEffect } from 'react';

const PokedexList = (props) => {
  const [list, setList] = useState(props.children);

  useEffect(() => {
    setList(props.children)
  }, [props.children]);

  return (
    <div className="pokemon-list">
      {list}
    </div>
  )
}

export default PokedexList;
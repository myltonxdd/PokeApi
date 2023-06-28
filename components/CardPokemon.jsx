"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function CardPokemon({ url }) {
  const [poke, setPoke] = useState(true);
  const [dataPokemon, setDataPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getData(url);
      setDataPokemon(pokemonData);
      setPoke(false);
    };

    fetchData();
  }, [url]);


  
  if (poke) {
    return (
        <div className="cardPokemon cjas">
            <div className="pokeAnimation">
                <img src="./poke.svg" alt="Loading"/>
            </div>
        </div>
    );
  }
  
   const imagePokemon = dataPokemon.sprites.front_default;
  

  return (
    <Link href={`info/${dataPokemon.id}`}>
      <div className="cardPokemon cjas">
                <div>
          <img src={imagePokemon} alt="Spiderman" />
        </div>
        <h1>{dataPokemon.name}</h1>
        <p>{dataPokemon.id}</p>
      </div>
    </Link>
  );
}

export default CardPokemon;

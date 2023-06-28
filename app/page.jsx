"use client"
import CardPokemon from "@/components/CardPokemon";



async function getData(url){
  const response = await fetch (url)
  const data = response.json();
  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=100");
  const firtData = data.results;
  


  return (
    <div id="contenedor">

      <h1 style={{color:"white", fontSize:"60px"}}>Poke-dex</h1>
      <div>
        {firtData.map((el,index)=>(
        <CardPokemon key={index} url={el.url}/>
        ))}
      </div>
    
    
    </div>
  )
}

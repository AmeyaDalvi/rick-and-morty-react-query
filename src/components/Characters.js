import React from "react";
import { useQuery } from "@tanstack/react-query";
import Character from "./Character";

const Characters = () => {
  //   const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
    // setCharacters(data.results);
    // console.log(data);
  };

  const { data, status } = useQuery(["characters"], fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  //   useEffect(() => {
  //     fetchCharacters();
  //   }, []);

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;

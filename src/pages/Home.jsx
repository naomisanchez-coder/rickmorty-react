import { useEffect, useState } from "react";
import axios from "axios";
import { Users, LoaderCircle } from "lucide-react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(response.data.results.slice(0, 6));
    } catch (error) {
      console.error("Error al obtener personajes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <h1>Rick & Morty Universe</h1>
        <p>
          Aplicación SPA desarrollada en React que consume la API pública de
          Rick and Morty para mostrar personajes del universo de la serie.
        </p>
        <a href="/entities" className="primary-button">
          Ver personajes
        </a>
      </section>

      <section className="section-title">
        <Users />
        <h2>Personajes destacados</h2>
      </section>

      {loading ? (
        <div className="loader">
          <LoaderCircle className="spin" />
          <p>Cargando personajes...</p>
        </div>
      ) : (
        <div className="grid">
          {characters.map((character) => (
            <article className="card" key={character.id}>
              <img src={character.image} alt={character.name} />
              <div className="card-content">
                <h3>{character.name}</h3>
                <p><strong>Estado:</strong> {character.status}</p>
                <p><strong>Especie:</strong> {character.species}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;
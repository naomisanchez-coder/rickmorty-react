import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderCircle, Star } from "lucide-react";

function Entities() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error al cargar entidades:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className="container">
      <section className="page-header">
        <h1>Entidades: Personajes</h1>
        <p>
          Listado de personajes obtenido desde la API pública de Rick and Morty.
        </p>
      </section>

      {loading ? (
        <div className="loader">
          <LoaderCircle className="spin" />
          <p>Cargando entidades...</p>
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
                <p><strong>Género:</strong> {character.gender}</p>
                <p><strong>Origen:</strong> {character.origin.name}</p>

                <button className="secondary-button">
                  <Star size={16} />
                  Ver información
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Entities;
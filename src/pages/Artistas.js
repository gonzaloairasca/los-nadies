import { Link } from "react-router-dom";
function Artistas() {
  return (
    <section className="artistas">
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <div className="divArtistaInfo">
            <h3>Nahuel bustamante</h3>
          </div>
        </div>
      </Link>
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3 className="divArtistaInfo">Nahuel bustamante</h3>
        </div>
      </Link>
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3 className="divArtistaInfo">Nahuel bustamante</h3>
        </div>
      </Link>
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3 className="divArtistaInfo">Nahuel bustamante</h3>
        </div>
      </Link>
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3 className="divArtistaInfo">Nahuel bustamante</h3>
        </div>
      </Link>
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3 className="divArtistaInfo">Nahuel bustamante</h3>
        </div>
      </Link>
    </section>
  );
}

export default Artistas;

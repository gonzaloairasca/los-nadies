import { Link } from "react-router-dom";
function Artistas() {
  return (
    <section className="artistas">
      <Link className="linkNegro" to="/">
        <div className="divArtista">
          <h3>Nahuel bustamante</h3>
        </div>
      </Link>
      <div>
        <Link to="/">
          <img
            className="imgArtista"
            src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="imgArtista"
            src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="imgArtista"
            src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="imgArtista"
            src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="imgArtista"
            src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"
            alt=""
          />
        </Link>
      </div>
    </section>
  );
}

export default Artistas;

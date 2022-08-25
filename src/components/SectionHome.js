import homePrint from "../images/losNadiesHome.png";
function SectionHome() {
  return (
    <section className="contenidoHome">
      <div>
        <img className="imgHome" src={homePrint} alt="imagen los nadies home" />
      </div>
      <div>
        <p className="txtHome">
          Créé en 2020, Los Nadies a pour objet le développement de projets de
          coopération artistique et culturelle internationaux. <br /> <br />
          Los Nadies propose des collaborations et une assistance aux artistes
          pour le développement de leurs projets. Elle axe, pour l'heure, ses
          actions autour des expressions esthétiques latino-américaines et
          européennes. <br /> <br />
          En 2022, Los Nadies accompagne deux créations et la production d'un
          disque.
        </p>
      </div>
    </section>
  );
}

export default SectionHome;

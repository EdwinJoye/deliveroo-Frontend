import Logo from "../img/icon.svg.png";

const Header = ({ data }) => {
  return (
    <header>
      <div className="headerien">
        <div className="container">
          <img className="headerlogo" src={Logo} alt="headerLogo" />
        </div>
      </div>

      <div className="header container">
        <div>
          <h1 className="headerTitre">{data.restaurant.name}</h1>
          <p className="headerTexte">{data.restaurant.description}</p>
        </div>
        <img className="headerPicture" src={data.restaurant.picture} alt="" />
      </div>
    </header>
  );
};

export default Header;

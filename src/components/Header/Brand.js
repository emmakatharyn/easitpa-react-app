import { Link } from "react-router-dom";
function Brand() {
  return (
    <Link className='header-link-home' to='home'>
      <img
        style={{ height: "40px" }}
        class='easi-logo'
        src='images/easi-logo-transp-white_lgTextOnly.png'
        alt='Erisa logo'
      />
    </Link>
  );
}

export default Brand;

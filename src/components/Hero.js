import { Link } from "react-router-dom";
// import Footer from "./Footer";
export default function Hero() {
  return (
    <section id='hero'>
      <div className='hero-flex'>
        <h1>Erisa Administrative Services, Inc.</h1>
        <p className='hero-paragraph'>
          A New Mexico-based Third Party Administrator <br />
          <em>
            Bridging the gap between hardworking professionals and their health
            insurance providers since 1985
          </em>
          <br />
          <span>Santa Fe | Albuquerque</span>
        </p>
        <div className='btn-flexbox'>
          <Link className='btn hero-btn' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
}

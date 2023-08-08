import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import utils from './utils';
import Restaurant from './Restaurant';

function App() {
  const restaurants = [
    {
      name: "Ibagari",
      website_link: "https://facebook.com/ibagaricoffeesv",
      embedded_pdf: "/ibagari.pdf",
    },
    {
      name: "Buena Vista",
      website_link: "https://facebook.com/PUPUSERIABUENAVISTA",
      embedded_pdf: "/buena_vista.pdf",
    },
    {
      name: "Abbi",
      website_link: "https://facebook.com/abbipupuseria",
      embedded_pdf: "/abbi.pdf",
    },
    {
      name: "Nativo",
      website_link: null,
      embedded_pdf: "/nativo.pdf",
    },
  ]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants}/>}/>
            {restaurants.map(({name, website_link, embedded_pdf}, index) => (
              <Route key={index} path={`/${utils.name_to_lower(name)}`}
                     element={<Restaurant name={name} website_link={website_link} embedded_pdf={embedded_pdf}/>}/>
            ))}
            <Route path="*" element={<RedirectToHome/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => navigate('/'), [navigate]);
  return null;
}

const Home = ({restaurants}) => (
  <>
    <div className="background-container">
      <img src="/background.jpg" alt="Monticello"/>
    </div>
    <h1>La Cueva de Monticello</h1>
    <div className="nav-container">
      {restaurants.map(({name}, index) => (
        <div key={index} className="card">
          <Link to={utils.name_to_lower(name)}>
            <img src={`/${utils.name_to_lower(name)}.jpg`} alt={name}/>
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default App;

import React, { useState } from 'react';

// components
import About from '../src/components/About';
import Nav from '../src/components/Nav';
import Portfolio from '../src/components/Portfolio';
import ContactForm from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Resume from '../src/components/Resume';

function App() {

  // past projects with link info
  const [projects] = useState([
    {
      image: 'Booksearch.png',
      title: 'Book Search Engine',
      link: 'https://secure-hamlet-87161.herokuapp.com/',
      repo: 'https://github.com/Cantalorian/book-search-engine'
    },
    {
      image: 'Budget.png',
      title: 'Budget Tracker',
      link: 'https://still-meadow-02494.herokuapp.com/',
      repo: 'https://github.com/Cantalorian/budget-tracker'
    },
    {
      image: 'EntertainMe.png',
      title: 'Entertain Me v1.0',
      link: 'https://cantalorian.github.io/Entertain-Me/',
      repo: 'https://github.com/Cantalorian/Entertain-Me'
    },
    {
      image: 'NoteTaker.png',
      title: 'Note Taker',
      link: 'https://cantalorian.github.io/note-taker/',
      repo: 'https://github.com/Cantalorian/note-taker'
    },
    {
      image: 'Scheduler.png',
      title: 'Work Day Scheduler',
      link: 'https://cantalorian.github.io/work-day-scheduler/',
      repo: 'https://github.com/Cantalorian/work-day-scheduler'
    },
    {
      image: 'shop.png',
      title: 'Shop-Shop',
      link: 'https://enigmatic-castle-31265.herokuapp.com/',
      repo: 'https://github.com/Cantalorian/shop-shop'
    },
    {
      image: 'Entertain-me-MERN.png',
      title: 'Entertain Me MERN',
      link: 'https://entertain-me-jc.herokuapp.com/',
      repo: 'https://github.com/Cantalorian/entertain-me-redux'
    }
  ])

    // need states for each tab
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {portfolioSelected ? (<Portfolio projects={projects}/>)
          : contactSelected ? (<ContactForm></ContactForm>)
          : resumeSelected ? (<Resume></Resume>)
          : <About></About>}

        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;

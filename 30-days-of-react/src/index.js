import React from 'react';
import ReactDOM from 'react-dom/client';

const welcome = 'Welcome to 30 Days of React'
        const title = 'Getting Started React'
        const subtitle = 'JavaScript Library'
        const author = {
          firstName: 'Glorry',
          lastName: 'Sibomana',
        }

        // JSX element, header
        const header = (
          <header>
            <div className='header-wrapper'>
              <h1>{welcome}</h1>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p>{author.firstName} {author.lastName}</p>
              <small>{new Date().toLocaleString()}</small>
            </div>
          </header>
        )

        const techs = ['HTML', 'JAVASCRIPT', 'CSS']
        const formattedTechs = techs.map((tech)=><li key={tech}>{tech}</li>)
  
        // JSX element, main
        const main = (
          <main>
            <div className='main-wrapper'>
              <p>
                Prerequisite to get started{' '}
                <strong>
                  <em>react.js</em>
                </strong>
                :
              </p>
              <ul>
                {formattedTechs}
              </ul>
            </div>
          </main>
        )
  
        // JSX element, footer
        const footer = (
          <footer>
            <div className='footer-wrapper'>
              <p>Copyright 2023</p>
            </div>
          </footer>
        )
  
        // JSX element, app
        const app = (
          <div className='app'>
            {header}
            {main}
            {footer}
          </div>
        )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


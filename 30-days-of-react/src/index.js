import React from 'react';
import ReactDOM from 'react-dom/client';
import rickmorty from './images/RickAndMorty.jpeg'
import { motion } from 'framer-motion';

const UserCard = () => (
  <div>
    <motion.img src={rickmorty} alt='rick and morty' style={{ height: '300px', width: '300px', borderRadius: '50%', overflow: 'hidden' }}
      animate={{
        x: ["0%", "200%", "100%"], // animate the image's horizontal position
        y: ["0%", "0%", "0%"], // animate the image's vertical position
      }}
      transition={{
        repeat: 0, // repeat the animation indefinitely
        duration: 3, // duration of each animation cycle
      }}
    />
  </div>
)


// JSX element, header
const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.author.firstName} {props.author.lastName}</p>
        <small>{new Date().toLocaleString()}</small>
      </div>
    </header>
  )
}

const TechList = () => {
  const techs = ['HTML', 'JAVASCRIPT', 'CSS']
  const formattedTechs = techs.map((tech) => <li key={tech}>{tech}</li>)
  return formattedTechs
}


// JSX element, main
const Main = () => (
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
        <TechList />
        <UserCard />
      </ul>
    </div>
  </main>
)

const copyRight = '2023';
// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to 30 Days of React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      author={{
        firstName: 'Glorry',
        lastName: 'Sibomana',
      }}
    />
    <Main />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }


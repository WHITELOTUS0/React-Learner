import React from 'react';
import ReactDOM from 'react-dom/client';
import rickmorty from './images/RickAndMorty.jpeg'
import { motion } from 'framer-motion';

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div>
    <motion.img src={image} alt='rick and morty' style={{ height: '300px', width: '300px', borderRadius: '50%', overflow: 'hidden' }}
      animate={{
        x: ["0%", "200%", "100%"], // animate the image's horizontal position
        y: ["0%", "0%", "0%"], // animate the image's vertical position
      }}
      transition={{
        repeat: 0, // repeat the animation indefinitely
        duration: 3, // duration of each animation cycle
      }}
    />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)


// JSX element, header
const Header = (
  {
    data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    },
  }
) => {
  // const data = props.data
  // const { welcome, title, subtitle, author: { firstName, lastName }, date } = data
  //const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const TechList = ({techs}) => {
  
  const formattedTechs = techs.map((tech) => <li key={tech}>{tech}</li>)
  return formattedTechs
}

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// JSX element, main
const Main = ({techs, handleTime,greetPeople, user}) => {
  return(
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
        <TechList techs={techs} />
      </ul>
      <UserCard user={user}/>
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)}

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
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Glorry',
      lastName: 'Sibomana',
    },
    date: new Date(),
  }
  const techs = ['HTML', 'JAVASCRIPT', 'CSS']
  const user = {...data.author, image: rickmorty}
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2023')
  }



  return (
    <div className='app'>
      <Header data={data} />
      <Main 
      user={user}
      techs={techs} 
      greetPeople={greetPeople}
      handleTime={handleTime}
      />
      <Footer />
    </div>
  )
}


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


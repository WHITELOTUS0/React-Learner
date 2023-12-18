import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{this.props.data.welcome}</h1>
                    <h2>Getting Started React</h2>
                    <h3>JavaScript Library</h3>
                    <p>Glorry Sibomana</p>
                    <small>2023</small>
                </div>
            </header>
        )
    }
}

class TechList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const techs = ['HTML', 'CSS', 'JavaScript']
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList />
                    </ul>
                </div>
            </main>
        )
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright&copy; 2023</p>
                </div>
            </footer>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
              firstName: 'Glorry',
              lastName: 'Sibomana',
            },
            date: 'Oct 7, 2020',
          }
        return (
            <div className='app'>
                <Header data={data}/>
                <Main />
                <Footer />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GlobalStyle from './utils/style/GlobalStyle'
import Skills from './pages/Skills'

const App = () => {  
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <main>
                        <Home id='welcome' />
                        <About id='about' />
                        <Skills id='portfolio' />
                    </main>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App


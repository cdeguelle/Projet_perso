import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderHomePage from './components/HeaderHomePage'
import HeaderCvPage from './components/HeaderCvPage'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import GlobalStyle from './utils/style/GlobalStyle'
import Skills from './pages/Skills'
import Portfolio from './pages/portfolio'
import CvSection from './pages/CVsection'
import CvPage from './pages/CVpage'

const App = () => {  
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <main>
                        <HeaderHomePage />
                        <Home />
                        <About />
                        <Skills />
                        <Portfolio />
                        <CvSection />
                    </main>
                </Route>
                <Route path='/cv'>
                    <HeaderCvPage />
                    <CvPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App


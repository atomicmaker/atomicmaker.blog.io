import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Article from '../pages/Article'
import OneArticle from '../pages/OneArticle'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import Pastime from '../pages/Pastime'
import Diary from '../pages/Diary'
import Share from '../pages/Share'
import Game from '../pages/Game'
import Anime from '../pages/Anime'
import Reading from '../pages/Reading'
import Movie from '../pages/Movie'

const RouterConfig = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/article' element={<Article />}></Route>
                <Route path='/article/:id' element={ <OneArticle /> }></Route>
                <Route path='/project' element={ <Project /> }></Route>
                <Route path='/skill' element={ <Skill /> }></Route>
                <Route path='/pastime' element={ <Pastime /> }></Route>
                <Route path='/pastime/game' element={ <Game /> }></Route>
                <Route path='/pastime/anime' element={ <Anime /> }></Route>
                <Route path='/pastime/reading' element={ <Reading /> }></Route>
                <Route path='/pastime/movie' element={ <Movie /> }></Route>
                <Route path='/pastime/:id' element={ <Diary /> }></Route>
                <Route path='/share' element={ <Share /> }></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouterConfig

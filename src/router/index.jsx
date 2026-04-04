import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Article from '../pages/Article'
import OneArticle from '../pages/OneArticle'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import Pastime from '../pages/Pastime'
import Diary from '../pages/Diary'
import Share from '../pages/Share'

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
                <Route path='/share' element={ <Share /> }></Route>
                <Route path='/pastime/:id' element={ <Diary /> }></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouterConfig
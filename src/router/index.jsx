import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

const RouterConfig = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default RouterConfig
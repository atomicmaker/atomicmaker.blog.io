import BackBtn from '../../components/BackBtn'
import React from 'react'
import { BlurFade } from '../../components/ui/blur-fade'
import './index.css'

const Movie = () => {
    return (
        <div className='movie-main'>
            <BackBtn />

            <div className='movie-content'>
                <BlurFade delay={0} className='movie-hero-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
                        <path d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/>
                        <path d="M24 44h20"/>
                    </svg>
                    <h1 className='movie-title'>Movie</h1>
                    <p className='movie-desc'>观影记录 — 记录看过的电影与影评</p>
                </BlurFade>

                <BlurFade delay={0.3} className='movie-list-card'>
                    <p className='placeholder-text'>🎥 影单列表即将上线，敬请期待...</p>
                </BlurFade>
            </div>
        </div>
    )
}

export default Movie

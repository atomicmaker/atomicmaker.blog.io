import BackBtn from '../../components/BackBtn'
import React from 'react'
import { BlurFade } from '../../components/ui/blur-fade'
import './index.css'

const Reading = () => {
    return (
        <div className='reading-main'>
            <BackBtn />

            <div className='reading-content'>
                <BlurFade delay={0} className='reading-hero-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        <line x1="8" y1="7" x2="16" y2="7" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    <h1 className='reading-title'>Reading</h1>
                    <p className='reading-desc'>阅读清单 — 记录读过的书与笔记</p>
                </BlurFade>

                <BlurFade delay={0.3} className='reading-list-card'>
                    <p className='placeholder-text'>📚 书单列表即将上线，敬请期待...</p>
                </BlurFade>
            </div>
        </div>
    )
}

export default Reading

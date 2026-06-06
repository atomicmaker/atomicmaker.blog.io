import ToolBar from '../../components/ToolBar'
import { BlurFade } from '../../components/ui/blur-fade'
import './index.css'

const projects = [
    {
        name: 'Omnifood',
        desc: 'AI 驱动的健康饮食订阅服务网站，响应式着陆页设计，展示 premium 食物配送品牌形象。',
        tech: ['HTML', 'CSS', 'JavaScript'],
        url: 'https://omnifood-atomic.netlify.app/',
        icon: 'https://omnifood-atomic.netlify.app/img/favicon.png'
    },
]

const Project = () => {
    return (
        <div className='project-main'>
            <div className='tool-bar'>
                <ToolBar part='project' />
            </div>

            <div className='project-content'>
                <BlurFade delay={0} className='project-hero'>
                    <h1 className='project-title'>项目展示</h1>
                    <p className='project-desc'>个人项目作品集</p>
                </BlurFade>

                <div className='project-grid'>
                    {projects.map((project, i) => (
                        <BlurFade key={project.name} delay={0.2 + i * 0.15}>
                            <a
                                href={project.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='project-card'
                            >
                                <div className='project-card-top'>
                                    <img
                                        src={project.icon}
                                        alt={project.name}
                                        className='project-icon'
                                    />
                                    <h3 className='project-name'>{project.name}</h3>
                                </div>
                                <p className='project-desc-text'>{project.desc}</p>
                                <div className='project-tech'>
                                    {project.tech.map(t => (
                                        <span key={t} className='project-tech-tag'>{t}</span>
                                    ))}
                                </div>
                                <span className='project-link-hint'>点击访问 →</span>
                            </a>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;

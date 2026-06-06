import ToolBar from '../../components/ToolBar'
import { BlurFade } from '../../components/ui/blur-fade'
import './index.css'

const tools = [
    {
        name: 'GitHub',
        desc: '代码托管与协作平台',
        url: 'https://github.com',
        icon: 'https://cdn.simpleicons.org/github/888',
    },
    {
        name: 'npm',
        desc: 'Node.js 包管理器',
        url: 'https://www.npmjs.com',
        icon: 'https://cdn.simpleicons.org/npm/888',
    },
    {
        name: 'color5',
        desc: '配色灵感',
        url: 'https://www.color5.com',
        icon: 'https://www.color5.com/favicon.ico'
    },
    {
        name: 'Postman',
        desc: '一站式 API 调试、测试、文档生成与团队协作的接口开发管理工具',
        url: 'https://www.postman.com',
        icon: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png'
    }
]

const Share = () => {
    return (
        <div className='share-main'>
            <div className='tool-bar'>
                <ToolBar part='share' />
            </div>

            <div className='share-content'>
                <BlurFade delay={0} className='share-hero'>
                    <h1 className='share-title'>工具分享</h1>
                    <p className='share-desc'>一些常用开发工具与网站</p>
                </BlurFade>

                <div className='share-grid'>
                    {tools.map((tool, i) => (
                        <BlurFade key={tool.name} delay={0.1 + i * 0.06}>
                            <a href={tool.url} target='_blank' rel='noopener noreferrer' className='share-card'>
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className='share-icon'
                                />
                                <div className='share-info'>
                                    <span className='share-name'>{tool.name}</span>
                                    <span className='share-desc-text'>{tool.desc}</span>
                                </div>
                            </a>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Share;

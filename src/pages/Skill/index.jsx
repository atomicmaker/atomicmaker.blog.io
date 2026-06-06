import './index.css'
import { AuroraText } from '../../components/ui/aurora-text'
import { BlurFade } from '../../components/ui/blur-fade'
import TechCloud from '../../components/TechCloud'
import ToolBar from '../../components/ToolBar'

const Skill = () => {
    return (
        <div className='skill-main'>
            <div className='tool-bar'>
                <ToolBar part='skill' />
            </div>

            <div className='skill-content'>
                <BlurFade delay={0} className='skill-title-card'>
                    <p className='skill-title'>
                        我的<AuroraText>技术栈</AuroraText>
                    </p>
                    <p className='skill-subtitle'>掌握的工具及技术</p>
                </BlurFade>

                <BlurFade delay={0.3} className='skill-cloud-card'>
                    <TechCloud />
                </BlurFade>
            </div>
        </div>
    )
}

export default Skill;

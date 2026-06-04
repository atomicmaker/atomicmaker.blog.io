import './index.css'
import { AuroraText } from '../../components/ui/aurora-text'
import TechCloud from '../../components/TechCloud'
import ToolBar from '../../components/ToolBar'

const Skill = () => {
    return (
        <div className='skill-main'>
            <div>
                <ToolBar part='skill'></ToolBar>
            </div>

            <div className='skill-section'>
                <div className='skill-description'>
                    <p>我的<AuroraText>技术栈</AuroraText></p>
                </div>
                
                <div className='card-container'>
                    <TechCloud></TechCloud>
                </div>
            </div>
        </div>
    )
}

export default Skill;
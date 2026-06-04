import './index.css'
import { AuroraText } from '../../components/ui/aurora-text'
import { BlurFade } from '../../components/ui/blur-fade'
import LinkCard from '../../components/LinkCard'
import ProfileFrame from '../../components/ProfileFrame'
import SideBar from '../../components/SideBar'
import TimeCard from '../../components/TimeCard'
import ProfilePicture from '../../assets/img/profile.jpg'
import CardPicture from '../../assets/img/card-picture.jpg'

const Home = () => {
    return (
        <div className="home-main">
            <BlurFade delay={0.3} className='home-left-side'>
                <div className="card-container">
                    <div className="home-introduction">
                        <img 
                            src={ ProfilePicture } 
                            className='home-introduction-picture'
                        />
                        <p>不会替身(开发中)</p>
                    </div>
                    <SideBar></SideBar>
                </div>
            </BlurFade>

            <BlurFade delay={0.6} className='card-container home-picture-card'>
                    {/* <img 
                        src={CardPicture} 
                        className='home-picture'>
                    </img> */}
            </BlurFade>

            <BlurFade delay={0} className='card-container home-profile-card'>
                <div><ProfileFrame></ProfileFrame></div>
                <p>A simple soul with a passion for</p>
                <p><AuroraText>Games</AuroraText> and <AuroraText>Code</AuroraText></p>
                <p><AuroraText>Welcome</AuroraText> to my <AuroraText>Blog</AuroraText></p>
            </BlurFade>

            <BlurFade delay={1.2} className='home-link-card'>
                <LinkCard></LinkCard>
            </BlurFade>


            <BlurFade delay={0.9} className='home-time-card'>
                <TimeCard></TimeCard>
            </BlurFade>
        </div>
    )
}

export default Home
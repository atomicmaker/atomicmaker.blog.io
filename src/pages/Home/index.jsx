import './index.css'
import { AuroraText } from '../../components/ui/aurora-text'
import { BlurFade } from '../../components/ui/blur-fade'
import { HyperText } from '../../components/ui/hyper-text'
import { PixelImage } from '../../components/ui/pixel-image'
import LinkCard from '../../components/LinkCard'
import ProfileFrame from '../../components/ProfileFrame'
import SideBar from '../../components/SideBar'
import TimeCard from '../../components/TimeCard'
import ProfilePicture from '../../assets/img/profile.jpg'
import CardPicture from '../../assets/img/card-picture.jpg'

const Home = () => {
    return (
        <div className="main">
            <BlurFade delay={0.3} className='leftside'>
                <div className="card-container selection">
                    <div className="introduction">
                        <img src={ ProfilePicture } style={{width:"60px", borderRadius:"50px", margin:"0 15px 0 0"}}></img>
                        <p>不会替身(开发中)</p>
                    </div>
                    <SideBar></SideBar>
                </div>
            </BlurFade>

            <div className='midside' style={{marginTop:"10%"}}>
                <BlurFade delay={0.6} className='card-picture'>
                    <PixelImage src={ CardPicture }></PixelImage>
                </BlurFade>

                <BlurFade delay={0} className='card-container'>
                    <div><ProfileFrame></ProfileFrame></div>
                    <p style={{fontSize:"20px"}}>A simple soul with a passion for</p>
                    <p style={{fontSize:"30px"}}><AuroraText>Games</AuroraText> and <AuroraText>Code</AuroraText></p>
                    <p style={{fontSize:"20px"}}><AuroraText>Welcome</AuroraText> to my <AuroraText>Blog</AuroraText></p>
                </BlurFade>

                <BlurFade delay={1.2} style={{marginTop:"10%"}}>
                    <LinkCard></LinkCard>
                </BlurFade>
            </div>

            <BlurFade delay={0.9} className='rightside'>
                <div></div>
                <TimeCard></TimeCard>
            </BlurFade>
        </div>
    )
}

export default Home
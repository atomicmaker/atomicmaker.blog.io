import './index.css'
import LinkCard from '../../components/LinkCard'
import ProfileFrame from '../../components/ProfileFrame'
import SideBar from '../../components/SideBar'
import TimeCard from '../../components/TimeCard'
import ProfilePicture from '../../assets/img/profile.jpg'

const Home = () => {
    return (
        <div className="main">
            <div className='leftside'>
                <div className="card-container selection">
                    <div className="introduction">
                        <img src={ ProfilePicture } style={{width:"60px", borderRadius:"50px", margin:"0 15px 0 0"}}></img>
                        <p>不会替身(开发中)</p>
                    </div>
                    <SideBar></SideBar>
                </div>
            </div>

            <div className='midside' style={{marginTop:"10%"}}>
                <div className='card-container'>

                </div>

                <div className='card-container'>
                    <div><ProfileFrame></ProfileFrame></div>
                    <p style={{fontSize:"20px"}}>A simple soul with a passion for</p>

                </div>

                <div style={{marginTop:"10%"}}>
                    <LinkCard></LinkCard>
                </div>
            </div>

            <div className='rightside'>
                <div></div>
                <TimeCard></TimeCard>
            </div>
        </div>
    )
}

export default Home
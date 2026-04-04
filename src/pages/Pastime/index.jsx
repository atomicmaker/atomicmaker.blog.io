import React from 'react'
import { Calendar, theme } from 'antd'
import EnterCard from '../../components/EnterCard'
import ENTBtn from '../../components/ENTBtn'
import ToolBar from '../../components/ToolBar'
import './index.css'

const Pastime = () => {
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      border: '3px solid rgb(0, 0, 0)',
      boxShadow: '-12px 12px 0 rgb(0, 0, 0)',
    };
    
    const [nowDay, setNDay] = React.useState(new Date()); 
    React.useEffect(() => {
        const timer = setInterval(() => {
            setNDay(new Date());
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    let selected = ('' + nowDay.getFullYear()) + '-' 
                    + ('0' + (nowDay.getMonth() + 1)).slice(-2) + '-'
                    + ('0' + nowDay.getDate()).slice(-2)

    const [date, setDate] = React.useState(selected)

    
    React.useEffect(() => {
        setDate(selected)
    }, [selected])

    return (
        <div className='pastime-all'>
            <ToolBar part='pastime' />
            <div className='pastime-record'>
                <div style={wrapperStyle} className='pastime-date'>
                    <Calendar fullscreen={false} onSelect={(date, { source }) => {
                        if (source === 'date') {
                            selected = date.format('YYYY-MM-DD')
                            setDate(selected)
                        }
                    }} />
                </div>
                
                <div className='pastime-btn'>
                    <ENTBtn></ENTBtn>
                 </div>

                <div className='pastime-enter'>
                    <EnterCard date={date} ></EnterCard>
                </div>
            </div>
        </div>
    )
}

export default Pastime;
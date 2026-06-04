import React from 'react'
import { Calendar } from 'antd'
import EnterCard from '../../components/EnterCard'
import ENTBtn from '../../components/ENTBtn'
import ToolBar from '../../components/ToolBar'
import { BlurFade } from '../../components/ui/blur-fade'
import './index.css'

const Pastime = () => {
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
        <div className='pastime-main'>
            <div className='tool-bar'>
                <ToolBar part='pastime' />
            </div>

            <div className='pastime-content'>
                <BlurFade delay={0} className='pastime-card diary-panel'>
                    <div className='calendar-inner'>
                        <Calendar fullscreen={false} onSelect={(date, { source }) => {
                            if (source === 'date') {
                                selected = date.format('YYYY-MM-DD')
                                setDate(selected)
                            }
                        }} />
                    </div>
                    <div className='diary-divider' />
                    <EnterCard date={date} />
                </BlurFade>

                <BlurFade delay={0.2} className='pastime-card hobby-panel'>
                    <ENTBtn />
                </BlurFade>
            </div>
        </div>
    )
}

export default Pastime;

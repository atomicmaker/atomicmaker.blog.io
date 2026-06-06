import { Link } from 'react-router-dom'
import { Dock, DockIcon } from './ui/dock'

const ToolBar = ({ part }) => {
    return (
        <Dock className="![background:linear-gradient(to_right_bottom,#EEEEAE,#F9F8F7)] !border-2 !border-[#EEEEAE]">
            <DockIcon>
                <Link to='/'>
                    <img src='icon.jpg'></img>
                </Link>
            </DockIcon>

            <DockIcon>
                <Link to='/article' style={{color: part=='article' ? "grey" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm3 12h5q.425 0 .713-.288T14 16t-.288-.712T13 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h8q.425 0 .713-.288T17 12t-.288-.712T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9"/></svg>
                </Link>
            </DockIcon>

            <DockIcon>
                <Link to='/project' style={{color: part=='project' ? "grey" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m9.5 14.5l-6-2.5V4l6-2.5zm-6.885-1.244A1 1 0 0 1 2 12.333V3.667a1 1 0 0 1 .615-.923L8.923.115A1.5 1.5 0 0 1 11 1.5V2h1.25c.966 0 1.75.783 1.75 1.75v8.5A1.75 1.75 0 0 1 12.25 14H11v.5a1.5 1.5 0 0 1-2.077 1.385zM11 12.5h1.25a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H11z" clipRule="evenodd"/></svg>
                </Link>
            </DockIcon>

            <DockIcon>
                <Link to='/skill' style={{color: part=='skill' ? "grey" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1a3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1a3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1H13zm9.464 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg>
                </Link>
            </DockIcon>

            <DockIcon>
                <Link to='/pastime' style={{color: part=='pastime' ? "grey" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M20.937 7.53C19.227 4.119 15.803 2 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c3.803 0 7.227-2.119 8.937-5.53a1 1 0 0 0-.397-1.316L15.017 12l5.522-3.153c.461-.264.636-.842.398-1.317m-8.433 3.602a.999.999 0 0 0 0 1.736l6.173 3.525A7.95 7.95 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.95 7.95 0 0 1 6.677 3.606z"/><circle cx="11.5" cy="7.5" r="1.5" fill="#666666"/></svg>
                </Link>
            </DockIcon>

            <DockIcon>
                <Link to='/share' style={{color: part=='share' ? "grey" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9.8v.9l-1.7.2c-2.6.4-4.5 1.4-5.9 2.7c1.7-.5 3.5-.8 5.6-.8h2v1.3l2.2-2.1zM11 5l7 7l-7 7v-4.1c-5 0-8.5 1.6-11 5.1c1-5 4-10 11-11m6-1V5l7 7l-7 7v-3l4-4"/></svg>
                </Link>
            </DockIcon>
        </Dock>
    )
}

export default ToolBar;
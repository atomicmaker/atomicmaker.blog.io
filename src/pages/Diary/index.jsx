import { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router-dom";
import BackBtn from '../../components/BackBtn'
import Draggable from "react-draggable";
import NoteCard from '../../components/NoteCard'
import './index.css'

const images = import.meta.glob(`../../assets/diary/**/*.jpg`, 
    {
        eager: true,
        query: '?url',
        import: 'default'
    })


const Diary = () => {
    const { id } = useParams();
    const date = id.slice(1);
   
    const filterdPImages = Object.entries(images)
                            .filter(([filePath]) => filePath.includes(`diary/${date.slice(0, -3)}/${date}/`))
                            .map(([_, imgUrl]) => imgUrl);


    //阻止图片的默认拖拽事件
    const handleIamgeDragStart = (e) => {
        e.preventDefault()
    }

    //图片放大预览
    const [showPreview, setShowPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState('')

    //描述图片文本
    const [content, setContent] = useState('');

    const handleDoubleClick = (src) => {
        setPreviewImage(src)
        setShowPreview(true)
        document.body.style.overflow = 'hidden'

        const tmp = src.split('/')
        const textSrc = tmp[tmp.length - 2] + '/' + tmp[tmp.length - 1].slice(0, -4)

        const loadTxt = async () => {
            try {
              const modules = import.meta.glob('../../assets/diary/**/*.txt', { query: '?raw', import: 'default'});
              const text = await modules[`../../assets/diary/${textSrc.slice(0, -5)}/${textSrc}.txt`]();
              setContent(text);
            } catch (err) {
              console.error('读取失败', err);
            }
        };
        loadTxt();
    }

    const cardsRef = useRef([]);
    //首次加载随机位置
    useEffect(() => {
      cardsRef.current.forEach(card => {
        card.style.position = 'absolute'
        card.style.top =  `${Math.random() * 40 + 10}%`
        card.style.left = `${Math.random() * 40 + 20}%`
        card.style.rotate = `${(Math.random() - 0.5) * 25}deg`
        card.style.zIndex = Math.floor(Math.random() * 10) + 1
      });
    }, []);

    // 需要置顶的 id
    // const [topId, setTopId] = useState(null)
    // const handleClick = (id) => {
    //     setTopId(id)
    // }

    const closePreview = () => {
        setShowPreview(false)
    }

    return (
        <div>
            <BackBtn></BackBtn>
            <div>
                {filterdPImages.map((imgUrl, index) => {
                    return (
                        <Draggable>
                            <div>
                            <div 
                                ref={(el) => (cardsRef.current[index] = el)}
                                className='img-card'
                                // 动态类名，置顶则加 top-class
                                //className={`img-card ${topId === index ? 'top-class' : ''}`} 
                                onDoubleClick={ () => handleDoubleClick(imgUrl) }
                                //onPointerDown={ () => { handleClick(index) }}
                            >
                                <img 
                                    src={imgUrl} 
                                    key={index}
                                    onDragStart={ handleIamgeDragStart }
                                />
                            </div>
                            </div>
                        </Draggable>
                    )
                })}
            </div>
            {showPreview && (
                <div
                    onClick={closePreview}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgb(255, 255, 255, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)', // 兼容 Safari
                    }}
                >
                    <img
                        onClick={(e) => e.stopPropagation()}
                        src={previewImage}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '8px',
                        }}
                    />
                    <div onClick={(e) => e.stopPropagation()} style={{position: 'fixed', bottom: '5%', right: '5%'}}>
                        <Draggable>
                            <NoteCard>
                                <p>{ content }</p>
                            </NoteCard>
                        </Draggable>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Diary;


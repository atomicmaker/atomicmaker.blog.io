import './index.css'
import { BlurFade } from '../../components/ui/blur-fade'
import TechCloud from '../../components/TechCloud'
import ToolBar from '../../components/ToolBar'
import book6 from '../../assets/img/books/深度学习入门2 自制框架.jpg'
import book7 from '../../assets/img/books/代码整洁之道.jpg'
import book8 from '../../assets/img/books/SQL必知必会 (第5版).jpg'
import book9 from '../../assets/img/books/Hello算法.jpg'
import book10 from '../../assets/img/books/程序是怎样跑起来的.jpg'
import book11 from '../../assets/img/books/网络是怎样连接的.jpg'

const books = [
    { title: '深入理解计算机系统', author: 'Randal E. Bryant', status: 'doing', img: 'https://img1.doubanio.com/view/subject/l/public/s29195878.jpg' },
    { title: 'Head First Java (第二版·中文版)', author: 'Kathy Sierra & Bert Bates', status: 'done', img: 'https://www.oreilly.com.cn/images/bookcover/hf_java_2ed_cvr.jpg' },
    { title: 'Python编程从入门到实践 (第2版)', author: 'Eric Matthes', status: 'done', img: 'https://img1.doubanio.com/view/subject/s/public/s33716278.jpg' },
    { title: '算法图解', author: 'Aditya Bhargava', status: 'done', img: 'https://img9.doubanio.com/view/subject/l/public/s29358625.jpg' },
    { title: '深度学习入门 基于Python的理论与实现', author: '斋藤康毅', status: 'done', img: 'https://img9.doubanio.com/view/subject/s/public/s29815955.jpg' },
    { title: '深度学习入门2 自制框架', author: '斋藤康毅', status: 'done', img: book6 },
    { title: 'Head First设计模式 (第二版)', author: 'Eric Freeman & Elisabeth Robson', status: 'done', img: 'https://www.oreilly.com.cn/images/bookcover/Head-First-Design-Patterns-2e_cvr_l.gif' },
    { title: '代码整洁之道', author: 'Robert C. Martin', status: 'doing', img: book7 },
    { title: 'SQL必知必会 (第5版)', author: 'Ben Forta', status: 'done', img: book8 },
    { title: 'Hello算法', author: '靳宇栋', status: 'done', img: book9 },
    { title: '程序是怎样跑起来的', author: '矢泽久雄', status: 'done', img: book10 },
    { title: '网络是怎样连接的', author: '户根勤', status: 'doing', img: book11 },
]

const videos = [
    { title: 'Build Responsive Real-World Websites with HTML and CSS', platform: 'Udemy', author: 'Jonas Schmedtmann', status: 'done', url: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/', img: 'https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg' },
    { title: 'Spring Boot: Mastering the Fundamentals', platform: 'codewithmosh', author: 'Mosh Hamedani', status: 'done', url: 'https://codewithmosh.com/p/spring-boot-fundamentals', img: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodewithmosh%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcovers%2Fspring-boot-part1&w=640&q=75' },
    { title: 'Spring Boot: Mastering REST API Development', platform: 'codewithmosh', author: 'Mosh Hamedani', status: 'done', url: 'https://codewithmosh.com/p/spring-boot-building-apis', img: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodewithmosh%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Fcovers%2Fspring-boot-part2&w=640&q=75' },
    { title: 'HTML & CSS Full Course', platform: 'YouTube', author: 'Simon', status: 'done', url: 'https://courses.supersimple.dev/courses/html-css', img: 'https://supersimple.dev/assets/html-css-full-course-cover-Bz98bhLm.png' },
]

const Skill = () => {
    return (
        <div className='skill-main'>
            <div className='tool-bar'>
                <ToolBar part='skill' />
            </div>

            <div className='skill-layout'>
                <div className='skill-left-col'>
                    <BlurFade delay={0.2} className='skill-cloud-card'>
                        <TechCloud />
                    </BlurFade>
                </div>

                <div className='skill-right-col'>
                    {/* 书籍 */}
                    <BlurFade delay={0.25} className='skill-section-card skill-books-card'>
                        <div className='skill-section-header'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#666666" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z"/><path fill="#666666" d="M8 6h9v2H8z"/></svg>
                            <span className='skill-section-title'>书籍</span>
                        </div>

                        <div className='books-grid'>
                            {books.map(book => (
                                <div key={book.title} className='book-3d-card'>
                                    <div className='book-inner'>
                                        <div className='book-cover'>
                                            <span className={`status-badge status-${book.status}`}>{book.status === 'doing' ? '在读' : book.status === 'done' ? '已读' : '待读'}</span>
                                            <img src={book.img} alt={book.title} className='book-cover-img' />
                                        </div>
                                    </div>
                                    <span className='book-title'>{book.title}</span>
                                    <span className='book-author'>{book.author}</span>
                                </div>
                            ))}
                        </div>
                    </BlurFade>

                    {/* 视频 */}
                    <BlurFade delay={0.4} className='skill-section-card skill-videos-card'>
                        <div className='skill-section-header'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="4"/><path d="m15 12l-5-3v6z"/></g></svg>
                            <span className='skill-section-title'>视频</span>
                        </div>

                        <div className='videos-grid'>
                            {videos.map(video => (
                                <a key={video.title} href={video.url} target='_blank' rel='noopener noreferrer' className='video-card'>
                                    <div className='video-thumb'>
                                        <span className={`status-badge status-${video.status}`}>{video.status === 'doing' ? '在看' : video.status === 'done' ? '已看' : '待看'}</span>
                                        <img src={video.img} alt={video.title} className='video-thumb-img' />
                                        <span className='video-platform-badge'>{video.platform}</span>
                                    </div>
                                    <div className='video-info'>
                                        <span className='video-title'>{video.title}</span>
                                        <span className='video-author'>{video.author}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}

export default Skill;

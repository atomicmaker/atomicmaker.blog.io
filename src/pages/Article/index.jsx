import { Link } from 'react-router-dom';
import ToolBar from '../../components/ToolBar'
import { BlurFade } from '../../components/ui/blur-fade'
import { useEffect, useState } from 'react';
import ProfilePicture from '../../assets/img/profile.jpg'
import './index.css'

const Article = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadArticles = async() => {
            try {
                const mdFiles = import.meta.glob('../../assets/articles/*.md', {
                    eager: true,
                    query: '?raw',
                    import: 'default'
                })

                const articleList = []
                for (const [filePath, rawContent] of Object.entries(mdFiles)) {
                    const fileName = filePath.split('/').pop().replace('.md', '')
                    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/
                    const match = frontmatterRegex.exec(rawContent)
                    let meta = { title: '', date: '', tags: []}

                    if (match) {
                        const frontmatterStr = match[1];
                        frontmatterStr.split('\r\n').forEach(line => {
                            let [key, value] = line.split(':')
                            value = value.replace(/"/g, '').trim()

                            if (key == 'tags') {
                                value = value.slice(1, value.length-1)
                                meta[key] = value.split(',').map(tag => tag.trim())
                            }
                            else {
                                meta[key] = value
                            }
                        })
                    }

                    articleList.push({
                        id: fileName,
                        ...meta
                    })
                }

                // 按日期倒序排序（最新的文章在最前面）
                articleList.sort((a, b) => b.date.localeCompare(a.date))
                setArticles(articleList)
            } catch (err) {
                console.error('加载文章列表失败', err)
            } finally {
                setLoading(false)
            }
        }

        loadArticles()
    }, [])

    if (loading) {
        return (
            <div className='article-main'>
                <div className='tool-bar'>
                    <ToolBar part='article' />
                </div>
                <div className='article-loading'>加载文章中...</div>
            </div>
        )
    }

    return (
        <div className='article-main'>
            <div className='tool-bar'>
                <ToolBar part='article' />
            </div>

            <div className='article-layout'>
                <div className='article-list-col'>
                    {articles.map((article, i) => (
                        <BlurFade key={article.id} delay={i * 0.1} className='article-card'>
                            <span className='article-date'>{article.date}</span>
                            <Link to={`/article/${article.id}`} className='article-title-link'>
                                <h3 className='article-title'>{article.title}</h3>
                            </Link>
                            <div className='article-tags'>
                                {article.tags.map(tag => (
                                    <span key={tag} className='article-tag'>#{tag}</span>
                                ))}
                            </div>
                        </BlurFade>
                    ))}
                </div>

                <div className='article-profile-col'>
                    <BlurFade delay={0.3} className='article-profile-card'>
                        <img
                            src={ProfilePicture}
                            className='article-profile-pic'
                        />
                        <p className='article-profile-name'>不会替身(开发中)</p>
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}

export default Article;

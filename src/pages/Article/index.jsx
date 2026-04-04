import { Link } from 'react-router-dom';
import ToolBar from '../../components/ToolBar'
import { useEffect, useState } from 'react';
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

    console.log(articles)
    if (loading) {
        return <div>加载文章列表中...</div>
    }

    return (
        <div>
            <ToolBar part='article' />
            <div className='article-list'>
                {articles.map(article => (
                    <div className='article-link'>
                        <p>{article.date}</p>

                        <Link to={`/article/${article.id}`}>
                            <h3>{article.title}</h3>
                        </Link>

                        <div>
                        {article.tags.map(tag => (
                            <span>#{tag}</span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Article;
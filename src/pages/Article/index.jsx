import { Link } from 'react-router-dom';
import ToolBar from '../../components/ToolBar'
import { BlurFade } from '../../components/ui/blur-fade'
import { useEffect, useState, useMemo } from 'react';
import ProfilePicture from '../../assets/img/profile.jpg'
import './index.css'

// 从 markdown 正文中提取纯文本摘要
const extractExcerpt = (rawContent, maxLen = 80) => {
    // 去掉 frontmatter
    const content = rawContent.replace(/^---[\s\S]*?---\r?\n?/, '')
    // 去掉标题、图片、链接、HTML 标签、markdown 标记
    const text = content
        .replace(/^#{1,6}\s.*$/gm, '')
        .replace(/<[^>]+>/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
        .replace(/[*_~>`]/g, '')
        .replace(/^\s*[\r\n]/gm, '')
        .trim()
    return text.length > maxLen ? text.slice(0, maxLen) + '…' : text
}

const Article = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

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
                        excerpt: extractExcerpt(rawContent),
                        ...meta
                    })
                }

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

    // 根据搜索词过滤文章
    const filtered = useMemo(() => {
        if (!search.trim()) return articles
        const kw = search.toLowerCase()
        return articles.filter(a =>
            a.title.toLowerCase().includes(kw) ||
            a.tags.some(t => t.toLowerCase().includes(kw)) ||
            a.excerpt.toLowerCase().includes(kw)
        )
    }, [articles, search])

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
                    {filtered.map((article, i) => (
                        <BlurFade key={article.id} delay={i * 0.1}>
                            <Link to={`/article/${article.id}`} className='article-card'>
                                <div className='article-card-head'>
                                    <span className='article-date'>{article.date}</span>
                                    <div className='article-tags'>
                                        {article.tags.map(tag => (
                                            <span key={tag} className='article-tag'>#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className='article-title'>{article.title}</h3>
                                <p className='article-excerpt'>{article.excerpt}</p>
                            </Link>
                        </BlurFade>
                    ))}
                </div>

                <div className='article-profile-col'>
                    <BlurFade delay={0.3}>
                        <div className='article-profile-card'>
                            <img
                                src={ProfilePicture}
                                className='article-profile-pic'
                            />
                            <p className='article-profile-name'>不会替身(开发中)</p>
                            <p className='article-profile-bio'>A simple soul with a passion for Games and Code</p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.4} className='article-search-card'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='search-icon'>
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            className='article-search-input'
                            placeholder='搜索文章…'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}

export default Article;

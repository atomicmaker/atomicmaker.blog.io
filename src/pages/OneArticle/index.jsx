import BackBtn from '../../components/BackBtn'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css/github-markdown.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

const OneArticle = () => {
    const { id } = useParams();
    const [blogContent, setBlogContent] = useState('')

    const loadMd = async () => {
        try {
            const modules = import.meta.glob('../../assets/articles/*.md', { query: '?raw', import: 'default'});
            const md = await modules[`../../assets/articles/${id}.md`]();
            const content = md.replace(/^---\r?\n([\s\S]*?)\r?\n---/, '').trim()
            setBlogContent(content);
        } catch (err) {
            console.error('读取失败', err);
        }
    };
    loadMd();

    return (
        <div>
            <BackBtn></BackBtn>
            <div className="markdown-body article-body">
                <div
                    style={{
                        maxHeight: '85vh',
                        overflowY: 'auto',
                    }}
                >
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeRaw]}
                >
                    {blogContent}
                </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default OneArticle;
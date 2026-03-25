import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import BlogContent from '../../assets/articles/hello-blog.md?raw'
import 'github-markdown-css/github-markdown.css'

const OneArticle = () => {
    return (
        <div style={{margin:"20px"}}>
            <div className="markdown-body" style={{ 
                maxWidth: 800, 
                lineHeight: 1.8,
                fontSize: 16,
            }}>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeRaw]}
                >
                    {BlogContent}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default OneArticle;
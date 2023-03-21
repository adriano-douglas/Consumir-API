import { useEffect, useState } from 'react'
import Post from '../components/post/Post'
import './Home.css'

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            let baseUrl = `https://jsonplaceholder.typicode.com/posts`
            const response = await fetch(baseUrl)
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className='homeContainer'>
        <div className="homeContainerContent">
            {posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    </div>
  )
}

export default Home
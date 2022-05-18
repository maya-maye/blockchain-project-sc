import {posts} from "../data"
import Card from "../components/Card"
import Question from "../Question.js"

const Home = () => {
    return (
        <div className="post">
            {/* {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))} */}
            <Question q = "Is a hotdog a sandwich?"/>
        </div>
    )
}

export default Home
import BaseLayout from "@/components/layouts/Base"
import axios from "axios"

const Portfolio = ({ post }) => {
  return (
    <BaseLayout>
      <h1>I am Portfolio page</h1>

      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>ID: {post.id}</p>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async ({ query }) => {
  let post = {}
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    post = res.data
  } catch {
    console.log("Cannot fetch post!")
  }

  return { post }
}

export default Portfolio

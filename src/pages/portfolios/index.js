import BaseLayout from "@/components/layouts/Base"
import axios from "axios"
import Link from "next/link"

const Portfolios = ({ posts }) => {
  return (
    <BaseLayout>
      <h1>I am Portfolios page</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/portfolios/${post.id}`} legacyBehavior>
              <a>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  )
}

Portfolios.getInitialProps = async () => {
  let posts = []
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    posts = res.data
  } catch {
    console.log("Cannot fetch posts!")
  }

  return { posts: posts.slice(0, 10) }
}

export default Portfolios

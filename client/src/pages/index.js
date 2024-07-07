import PropTypes from "prop-types"
import { NoticePage } from "@/features/NoticePage"

export async function getStaticProps () {
  return {
    props: {
      title: "Hello, World!",
      background: "/images/rg_inazuma2.jpg",
      paragraphs: [
        { id: 0, content: "Test content" },
        { id: 1, content: "Hello" },
        { id: 2, content: "Heeey" }
      ]
    }
  }
}

const LinkTo = () => {
  return <a href="#" className="text-blue-500 hover:underline hover:text-blue-700">
    Click Me
  </a>
}

function App ({ title, paragraphs, background }) {
  return (
    <NoticePage
      title={title}
      paragraphs={paragraphs}
      background={background}
      Component={LinkTo}
    />
  )
}

App.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.array,
  background: PropTypes.string
}

export default App

import PropTypes from "prop-types"
import { NoticePage } from "@/features/NoticePage"

export async function getStaticProps () {
  return {
    props: {
      title: "Hello, World!",
      background: "/images/rg_inazuma2.jpg",
      paragraphs: [
        { id: 0, content: "mito zido vin olah odomu dala nunu unta tomo mani yo yaya hili mi pupu biat ye eleka in Du ya zido dala? unu todo upa mito vin" },
        { id: 1, content: "Du ya zido dala? da shato mani todo odomu yoyo mi lawa mita muhe kucha beru nye sada zido vin celi nunu in eleka in yoyo yeye vin yo mimi odomu boya nini" },
        { id: 2, content: "ya biadam mimi unta yeye yoyo aba eleka lawa upa shato unu du da Du ya zido dala? pupu beru nye kucha odomu sama kundala" }
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

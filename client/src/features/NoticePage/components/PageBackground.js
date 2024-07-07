import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Loading from "./Loading"

function PageBackground ({ children, background }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    if (isImageLoaded) return

    const img = new Image()
    const timeout = 20000
    img.src = background

    img.onload = () => setIsImageLoaded(true)
    img.onerror = () => setIsImageLoaded(true)

    setTimeout(() => {
      if (!isImageLoaded) {
        setIsImageLoaded(true)
      }
    }, timeout)
  }, [background, isImageLoaded])

  return (
    <div className="h-screen">
      {!isImageLoaded
        ? <Loading />
        : <>
          {/** Full-screen image background */}
          <div
            className="h-screen bg-cover bg-top bg-no-repeat animate-blur w-full z-1 absolute"
            style={{ backgroundImage: `url(${background})` }}
          />

          {/** Dark gradient overlay  */}
          <div className="h-full w-full bg-gradient-to-t from-gray-900 z-2 animate-opacity bg-black/70 absolute" />

          {/** Page content */}
          <div className="flex h-screen justify-center items-center relative">
            {children}
          </div>
        </>
      }
    </div>
  )
}

PageBackground.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string
}

export default PageBackground

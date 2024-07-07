import PropTypes from "prop-types"

function Loading ({ dots = 5 }) {
  return (
    <div className="h-full w-full">
      <div className="flex h-screen justify-center items-center relative">
        {Array.from(Array(dots).keys()).map(item => (
          <span className="relative flex h-3 w-3 m-2" key={item}>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
        ))}
      </div>
    </div>
  )
}

Loading.propTypes = {
  dots: PropTypes.number
}

export default Loading

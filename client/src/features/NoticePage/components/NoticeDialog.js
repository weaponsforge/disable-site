import { Inter } from "next/font/google"
import PropTypes from "prop-types"

const inter = Inter({ subsets: ["latin"] })

function NoticeDialog ({ title = "title", paragraphs = [], Component }) {
  return (
    <div className={`w-[600px] mx-auto p-8 shadow-lg rounded-lg z-2c bg-white ${inter.className}`}>
      <h3 className="font-bold text-xl text-slate-700">
        {title}
      </h3>

      <div className="text-semibold text-md text-slate-500 mt-3">
        {paragraphs.map((item) => (
          <p className="mt-2" key={item.id}>
            {item.content}
          </p>
        ))}
      </div>

      <div className="mt-2">
        {Component && <Component />}
      </div>
    </div>
  )
}

NoticeDialog.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.array,
  Component: PropTypes.func
}

export default NoticeDialog

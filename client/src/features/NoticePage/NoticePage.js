import PropTypes from "prop-types"

import NoticeDialog from "./components/NoticeDialog"
import PageBackground from "./components/PageBackground"

function NoticePage (props) {
  return (
    <PageBackground background={props.background}>
      <NoticeDialog {...props} />
    </PageBackground>
  )
}

NoticePage.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string
}

export default NoticePage

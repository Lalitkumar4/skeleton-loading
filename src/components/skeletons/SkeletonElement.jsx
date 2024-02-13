import "./Skeleton.css"

// eslint-disable-next-line react/prop-types
const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`

  return <div className={classes}></div>
}

export default SkeletonElement

import SkeletonElement from "./SkeletonElement"
import Shimmer from "./Shimmer"

// eslint-disable-next-line react/prop-types
const SkeletonArticles = ({ theme }) => {
  const themeClass = theme || "light"

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-articles">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticles

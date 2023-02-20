export const getPageCount = (totalCount, limit) => {
  return Math.ceil( totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  // let result = []
  // for (let i = 0; i < totalPages; i++) {
  //   result.push(i + 1)
  // }
  const result = Array(totalPages).fill(0).map((item, index) => index + 1)
  return result
}
import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {

  let pagesArray = getPagesArray(totalPages)
  console.log(pagesArray)

  return (
    <div className="page__wrapper">
    { pagesArray.map(p => 
      <span className={page === p ? 'page page__current' : 'page'}
        onClick={() => changePage(p)}
        key={p.toString()}>
        { p }
      </span>
    )}
  </div>
  )
}

export default Pagination
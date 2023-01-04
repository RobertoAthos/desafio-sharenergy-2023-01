import React from 'react'
import './pagination.css'

export const Pagination = ({pages,currentPage,setCurrentPage}:any) => {
  return (
    <div className="pagination-btn-container">
    {Array.from(Array(pages), (item, index) => {
      return (
        <button
          value={index}
          style={index === currentPage ? {backgroundColor: '#00A2A2', border: 'none', color: 'white', fontWeight: 'bolder'} : null!}
          onClick={(e: any) => setCurrentPage(Number(e.target.value))}
          className= 'pagination-btn'
        >
          {index + 1}
        </button>
      );
    })}
  </div>
  )
}

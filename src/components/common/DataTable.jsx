import { useState } from 'react'
import { FaSort, FaSortUp, FaSortDown, FaSearch, FaEdit, FaTrash } from 'react-icons/fa'

function DataTable({ 
  columns, 
  data, 
  searchable = true,
  pagination = true,
  itemsPerPage = 5
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })
  
  // Handle search
  const filteredData = data.filter(item => {
    if (!searchTerm) return true
    
    // Search across all fields
    return Object.values(item).some(
      value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  
  // Handle sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0
    
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    
    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })
  
  // Handle pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const paginatedData = pagination
    ? sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : sortedData
  
  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
    }
    setSortConfig({ key, direction })
  }
  
  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return <FaSort className="ml-1 text-gray-400" />
    return sortConfig.direction === 'ascending' 
      ? <FaSortUp className="ml-1 text-gray-700" />
      : <FaSortDown className="ml-1 text-gray-700" />
  }
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  
  return (
    <div className="space-y-4">
      {searchable && (
        <div className="flex justify-between">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      )}
      
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="table-header-cell cursor-pointer select-none"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center">
                    {column.label}
                    {getSortIcon(column.key)}
                  </div>
                </th>
              ))}
              <th className="table-header-cell">Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex} className="table-row">
                  {columns.map((column) => (
                    <td key={column.key} className="table-cell">
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                  <td className="table-cell">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="table-cell text-center py-8 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{Math.min(((currentPage - 1) * itemsPerPage) + 1, sortedData.length)}</span> to{' '}
              <span className="font-medium">{Math.min(currentPage * itemsPerPage, sortedData.length)}</span> of{' '}
              <span className="font-medium">{sortedData.length}</span> results
            </p>
          </div>
          
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`pagination-button rounded-l-md ${currentPage === 1 ? 'pagination-button-disabled' : ''}`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1
              // Show limited buttons with ellipsis for many pages
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`pagination-button ${pageNumber === currentPage ? 'pagination-button-active' : ''}`}
                  >
                    {pageNumber}
                  </button>
                )
              } else if (
                (pageNumber === currentPage - 2 && pageNumber > 1) ||
                (pageNumber === currentPage + 2 && pageNumber < totalPages)
              ) {
                return <span key={pageNumber} className="px-2">...</span>
              }
              return null
            })}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`pagination-button rounded-r-md ${currentPage === totalPages ? 'pagination-button-disabled' : ''}`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default DataTable
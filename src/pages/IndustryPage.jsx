import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'
import DataTable from '../components/common/DataTable'
import { industries } from '../utils/mockData'

function IndustryPage() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would add the industry to the database
    // For this demo, we'll just hide the form
    setShowForm(false)
    setFormData({ name: '' })
  }
  
  const industryColumns = [
    { key: 'id', label: '#' },
    { key: 'name', label: 'Industry Name' },
    { key: 'created', label: 'Created Date' },
    { 
      key: 'status', 
      label: 'Status',
      render: (row) => (
        <span className={`status-badge ${row.status === 'active' ? 'status-badge-active' : 'status-badge-inactive'}`}>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      )
    }
  ]
  
  return (
    <>
      <PageHeader 
        title="Industry Management" 
        subtitle="Add and manage industries in the system" 
        action={
          <button 
            className="btn btn-primary flex items-center"
            onClick={() => setShowForm(!showForm)}
          >
            <FaPlus className="mr-2" />
            Add Industry
          </button>
        }
      />
      
      {/* Add Industry Form */}
      {showForm && (
        <div className="card mb-6 animate-fade-in">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Industry</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Industry Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <button type="submit" className="btn btn-primary">
                Save Industry
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Industries Table */}
      <div className="card">
        <DataTable 
          columns={industryColumns} 
          data={industries}
          searchable={true}
          pagination={true}
          itemsPerPage={5}
        />
      </div>
    </>
  )
}

export default IndustryPage
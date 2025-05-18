import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'
import DataTable from '../components/common/DataTable'
import { roles } from '../utils/mockData'

function RolePage() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    accessLevel: 'Limited Access',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would add the role to the database
    // For this demo, we'll just hide the form
    setShowForm(false)
    setFormData({ 
      name: '',
      accessLevel: 'Limited Access'
    })
  }
  
  const accessLevels = [
    'Minimal Access',
    'Read-only Access',
    'Limited Access',
    'Medium Access',
    'Technical Access',
    'Full Access'
  ]
  
  const roleColumns = [
    { key: 'id', label: '#' },
    { key: 'name', label: 'Role Name' },
    { key: 'accessLevel', label: 'Access Level' },
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
        title="Role Management" 
        subtitle="Add and manage user roles in the system" 
        action={
          <button 
            className="btn btn-primary flex items-center"
            onClick={() => setShowForm(!showForm)}
          >
            <FaPlus className="mr-2" />
            Add Role
          </button>
        }
      />
      
      {/* Add Role Form */}
      {showForm && (
        <div className="card mb-6 animate-fade-in">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Role</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Role Name
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
            <div className="mb-4">
              <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Access Level
              </label>
              <select
                id="accessLevel"
                name="accessLevel"
                value={formData.accessLevel}
                onChange={handleChange}
                className="input-field"
                required
              >
                {accessLevels.map(level => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-3 mt-6">
              <button type="submit" className="btn btn-primary">
                Save Role
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
      
      {/* Roles Table */}
      <div className="card">
        <DataTable 
          columns={roleColumns} 
          data={roles}
          searchable={true}
          pagination={true}
          itemsPerPage={5}
        />
      </div>
    </>
  )
}

export default RolePage
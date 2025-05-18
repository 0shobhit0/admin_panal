import { Link } from 'react-router-dom'

function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
        {action && (
          <div className="mt-4 md:mt-0">
            {action}
          </div>
        )}
      </div>
      
      {/* Breadcrumb */}
      <nav className="flex mt-3" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
            <span className="text-gray-700">{title}</span>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default PageHeader
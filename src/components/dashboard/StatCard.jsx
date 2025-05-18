function StatCard({ title, value, icon, change, changeType = 'increase' }) {
  return (
    <div className="card flex items-start">
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-1 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p className={`ml-2 flex items-baseline text-sm font-semibold ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span>{change}</span>
            </p>
          )}
        </div>
      </div>
      <div className={`p-3 rounded-md ${
        changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {icon}
      </div>
    </div>
  )
}

export default StatCard
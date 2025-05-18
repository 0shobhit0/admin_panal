import { FaUsers, FaBuilding, FaUserTie, FaUserPlus } from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'
import StatCard from '../components/dashboard/StatCard'
import ChartCard from '../components/dashboard/ChartCard'
import { 
  chartData, 
  chartOptions, 
  dashboardStats, 
  recentActivities
} from '../utils/mockData'

function Dashboard() {
  return (
    <>
      <PageHeader 
        title="Dashboard" 
        subtitle="Overview of your administration system" 
      />
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title={dashboardStats[0].title}
          value={dashboardStats[0].value}
          change={dashboardStats[0].change}
          changeType={dashboardStats[0].changeType}
          icon={<FaUsers className="h-5 w-5" />}
        />
        <StatCard
          title={dashboardStats[1].title}
          value={dashboardStats[1].value}
          change={dashboardStats[1].change}
          changeType={dashboardStats[1].changeType}
          icon={<FaBuilding className="h-5 w-5" />}
        />
        <StatCard
          title={dashboardStats[2].title}
          value={dashboardStats[2].value}
          change={dashboardStats[2].change}
          changeType={dashboardStats[2].changeType}
          icon={<FaUserTie className="h-5 w-5" />}
        />
        <StatCard
          title={dashboardStats[3].title}
          value={dashboardStats[3].value}
          change={dashboardStats[3].change}
          changeType={dashboardStats[3].changeType}
          icon={<FaUserPlus className="h-5 w-5" />}
        />
      </div>
      
      {/* Charts and activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard 
            title="User Statistics" 
            subtitle="Last 7 months"
            data={chartData}
            options={chartOptions}
          />
        </div>
        <div>
          <div className="card h-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start border-b border-gray-200 pb-4 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                      <span className="font-semibold">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
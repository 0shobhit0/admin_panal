// Mock data for industries
export const industries = [
  { 
    id: 1, 
    name: 'Technology', 
    created: '2023-10-15', 
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Healthcare', 
    created: '2023-09-22', 
    status: 'active' 
  },
  { 
    id: 3, 
    name: 'Finance', 
    created: '2023-08-30', 
    status: 'active' 
  },
  { 
    id: 4, 
    name: 'Education', 
    created: '2023-07-12', 
    status: 'inactive' 
  },
  { 
    id: 5, 
    name: 'Retail', 
    created: '2023-11-05', 
    status: 'active' 
  },
  { 
    id: 6, 
    name: 'Manufacturing', 
    created: '2023-10-18', 
    status: 'active' 
  },
  { 
    id: 7, 
    name: 'Entertainment', 
    created: '2023-09-14', 
    status: 'inactive' 
  },
  { 
    id: 8, 
    name: 'Hospitality', 
    created: '2023-08-25', 
    status: 'active' 
  },
  { 
    id: 9, 
    name: 'Transportation', 
    created: '2023-07-19', 
    status: 'active' 
  },
  { 
    id: 10, 
    name: 'Construction', 
    created: '2023-06-30', 
    status: 'inactive' 
  }
]

// Mock data for roles
export const roles = [
  { 
    id: 1, 
    name: 'Administrator', 
    accessLevel: 'Full Access', 
    created: '2023-10-15', 
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Manager', 
    accessLevel: 'Medium Access', 
    created: '2023-09-22', 
    status: 'active' 
  },
  { 
    id: 3, 
    name: 'Editor', 
    accessLevel: 'Limited Access', 
    created: '2023-08-30', 
    status: 'active' 
  },
  { 
    id: 4, 
    name: 'Viewer', 
    accessLevel: 'Read-only Access', 
    created: '2023-07-12', 
    status: 'active' 
  },
  { 
    id: 5, 
    name: 'Guest', 
    accessLevel: 'Minimal Access', 
    created: '2023-11-05', 
    status: 'inactive' 
  },
  { 
    id: 6, 
    name: 'Support', 
    accessLevel: 'Medium Access', 
    created: '2023-10-18', 
    status: 'active' 
  },
  { 
    id: 7, 
    name: 'Analyst', 
    accessLevel: 'Medium Access', 
    created: '2023-09-14', 
    status: 'active' 
  },
  { 
    id: 8, 
    name: 'Developer', 
    accessLevel: 'Technical Access', 
    created: '2023-08-25', 
    status: 'active' 
  },
  { 
    id: 9, 
    name: 'Content Creator', 
    accessLevel: 'Limited Access', 
    created: '2023-07-19', 
    status: 'inactive' 
  },
  { 
    id: 10, 
    name: 'Tester', 
    accessLevel: 'Technical Access', 
    created: '2023-06-30', 
    status: 'active' 
  }
]

// Mock chart data
export const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'User Registrations',
      data: [65, 59, 80, 81, 56, 55, 72],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Active Users',
      data: [28, 48, 40, 59, 86, 91, 85],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }
  ]
}

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

// Dashboard stats data
export const dashboardStats = [
  {
    id: 1,
    title: 'Total Users',
    value: '4,294',
    change: '+12.5%',
    changeType: 'increase'
  },
  {
    id: 2,
    title: 'Active Industries',
    value: '38',
    change: '+3.2%',
    changeType: 'increase'
  },
  {
    id: 3,
    title: 'Active Roles',
    value: '12',
    change: '-1.8%',
    changeType: 'decrease'
  },
  {
    id: 4,
    title: 'New Registrations',
    value: '289',
    change: '+18.7%',
    changeType: 'increase'
  }
]

// Recent activities
export const recentActivities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created a new industry',
    target: 'Aerospace',
    time: '35 minutes ago'
  },
  {
    id: 2,
    user: 'Emma Wilson',
    action: 'Updated role permissions for',
    target: 'Manager',
    time: '2 hours ago'
  },
  {
    id: 3,
    user: 'Michael Brown',
    action: 'Deleted user',
    target: 'robert@example.com',
    time: '5 hours ago'
  },
  {
    id: 4,
    user: 'Sarah Johnson',
    action: 'Added new role',
    target: 'Content Approver',
    time: '1 day ago'
  },
  {
    id: 5,
    user: 'Robert Davis',
    action: 'Updated industry',
    target: 'Healthcare',
    time: '2 days ago'
  }
]
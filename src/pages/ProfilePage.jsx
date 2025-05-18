import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaUser, FaCamera, FaBuilding } from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: null,
    companyLogo: null
  })

  const onDrop = useCallback((acceptedFiles, type) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          [type]: e.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const profileDropzone = useDropzone({
    onDrop: (files) => onDrop(files, 'profilePicture'),
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  const logoDropzone = useDropzone({
    onDrop: (files) => onDrop(files, 'companyLogo'),
    accept: { 'image/*': [] },
    maxFiles: 1
  })

  return (
    <>
      <PageHeader 
        title="Your Profile" 
        subtitle="Manage your personal information and company details" 
      />

      <div className="max-w-3xl mx-auto">
        <div className="card mb-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-gray-700 ${
                  !profileData.profilePicture ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {profileData.profilePicture ? (
                  <img 
                    src={profileData.profilePicture} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                )}
              </div>
              <button
                onClick={profileDropzone.open}
                className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <FaCamera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {profileData.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{profileData.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            Company Logo
          </h3>
          <div 
            className={`w-full h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer ${
              logoDropzone.isDragActive ? 'border-primary-500' : ''
            }`}
            {...logoDropzone.getRootProps()}
          >
            {profileData.companyLogo ? (
              <img 
                src={profileData.companyLogo} 
                alt="Company Logo" 
                className="max-h-full object-contain"
              />
            ) : (
              <div className="text-center">
                <FaBuilding className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Drag and drop your company logo here, or click to select a file
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
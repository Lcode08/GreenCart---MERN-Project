import React from 'react'

// Spinner Loader
export const Spinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }
  
  const colorClasses = {
    primary: 'border-primary',
    white: 'border-white',
    gray: 'border-gray-400'
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}></div>
  )
}

// Button with Loader
export const LoadingButton = ({ loading, children, className = '', ...props }) => {
  return (
    <button 
      className={`flex items-center justify-center gap-2 ${className} ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner size="sm" color="white" />}
      {children}
    </button>
  )
}

// Page Loader
export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-4 text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

// Card Skeleton
export const CardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 dark:bg-slate-700 aspect-square rounded-lg mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/4"></div>
      </div>
    </div>
  )
}

// List Skeleton
export const ListSkeleton = ({ rows = 5 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="animate-pulse flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800">
          <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
          </div>
          <div className="w-20 h-8 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>
      ))}
    </div>
  )
}

export default { Spinner, LoadingButton, PageLoader, CardSkeleton, ListSkeleton }
'use client'

import { Button } from '@/components/ui/button'

export default function MobileAppError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="text-6xl">😕</div>
        <h1 className="text-3xl font-bold text-gray-900">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600">
          {error.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-black text-white hover:bg-gray-800"
          >
            Try Again
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="border-2"
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

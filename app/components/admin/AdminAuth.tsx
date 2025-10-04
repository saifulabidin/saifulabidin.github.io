'use client';

import { useSession, signIn } from 'next-auth/react';

interface AdminAuthProps {
  session?: any;
  status?: string;
}

/**
 * Admin Authentication Component
 * Handles GitHub OAuth login for admin access
 * Can accept session/status props to avoid double useSession() calls
 */
export default function AdminAuth({ session: propSession, status: propStatus }: AdminAuthProps = {}) {
  const sessionHook = useSession();
  
  // Use props if provided, otherwise use hook
  const session = propSession ?? sessionHook.data;
  const status = propStatus ?? sessionHook.status;

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#19222D] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C6F10E]"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#19222D] flex items-center justify-center p-4">
        <div className="bg-[#20293A] p-8 rounded-lg shadow-xl max-w-md w-full">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#C6F10E]/10 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-[#C6F10E]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Admin Panel
          </h1>
          <p className="text-gray-300 mb-8 text-center">
            Sign in with GitHub to access the admin dashboard
          </p>

          {/* Sign In Button */}
          <button
            onClick={() => signIn('github', { callbackUrl: '/rokok-win-filter-bos' })}
            className="w-full bg-[#C6F10E] text-black py-3 px-4 rounded-md font-medium hover:bg-[#C6F10E]/90 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign in with GitHub
          </button>

          {/* Footer Note */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Only authorized GitHub accounts can access this panel
          </p>
        </div>
      </div>
    );
  }

  return null;
}

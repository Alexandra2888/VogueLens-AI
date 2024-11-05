'use client';

import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function ProfilePage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <main className="container mx-auto flex h-[80vh] items-center justify-center px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-2xl font-bold text-primary">Profile</h1>

        <div className="space-y-6 rounded-lg p-6 shadow">
          {/* Profile Header */}
          <div className="flex items-center gap-4 border-b pb-6">
            <img
              src={user.imageUrl}
              alt={user.firstName || 'Profile'}
              className="h-24 w-24 rounded-full border-4 border-white shadow"
            />
            <div>
              <h2 className="text-2xl font-semibold text-primary">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-primary">
                {user.primaryEmailAddress?.emailAddress}
              </p>
              {user.username && (
                <p className="text-primary">@{user.username}</p>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-primary">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p className="text-primary">
                  <span className="font-medium">Email: </span>
                  {user.primaryEmailAddress?.emailAddress}
                </p>
                {user.primaryPhoneNumber && (
                  <p className="text-primary">
                    <span className="font-medium">Phone: </span>
                    {user.primaryPhoneNumber.phoneNumber}
                  </p>
                )}
              </div>
              <p className="text-primary">Credits:</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

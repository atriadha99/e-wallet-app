import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to E-Wallet</h1>
          <p className="text-gray-700 mb-4">Manage all your bank accounts in one place.</p>
          <Link href="/login">
            <button className="w-full bg-blue-600 text-white rounded-xl py-2">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
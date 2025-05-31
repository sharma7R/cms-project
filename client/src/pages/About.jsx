import React from 'react'

export default function About() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: 'none', zIndex: 2, position: 'relative' }}
    >
      <div
        className="p-8 rounded-2xl max-w-3xl border border-yellow-200 mx-4"
        style={{
          boxSizing: 'border-box',
          width: '100%',
          boxShadow: '0 8px 32px 0 rgba(120, 72, 0, 0.35), 0 1.5px 8px 0 rgba(120, 72, 0, 0.18)',
          background: 'rgba(255, 243, 224, 0.95)'
        }}
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center tracking-tight" style={{ color: '#784800', letterSpacing: '0.02em' }}>
          About Interview Experience Management
        </h1>
        <div style={{ maxWidth: 900, color: '#784800', fontSize: '1.1rem', lineHeight: 1.7, margin: '0 auto' }}>
          <p className="mb-4">
            The Interview Experience Management project is designed to help candidates and recruiters share, manage, and discover real interview experiences. Our platform aims to foster a collaborative environment where users can:
          </p>
          <ul style={{ textAlign: 'left', margin: '1rem auto', maxWidth: 600, color: '#784800', fontWeight: 600 }}>
            <li style={{ marginBottom: '0.5rem' }}>Share detailed interview experiences for various companies and roles</li>
            <li style={{ marginBottom: '0.5rem' }}>Browse and search for interview stories to prepare effectively</li>
            <li style={{ marginBottom: '0.5rem' }}>Provide feedback and rate experiences to help others</li>
            <li>Connect with a community of job seekers and professionals</li>
          </ul>
          <p className="mt-4" style={{ color: '#a67c52' }}>
            Whether you are preparing for your next big interview or want to give back by sharing your journey, our platform is here to support you every step of the way.
          </p>
        </div>
      </div>
    </section>
  )
}

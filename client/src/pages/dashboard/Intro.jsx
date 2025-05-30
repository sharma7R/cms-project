import React from "react";

export default function Intro() {
    return (
        <div className="p-20 min-h-[80vh] bg-white shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Interview Experience Management App</h1>
            <p className="text-gray-600 mb-4">
                This app enables you to document, organize, and analyze your interview experiences, making it easier to prepare for future opportunities and share insights with others.
            </p>
            <ul className="list-disc text-gray-700 mb-4">
                <li>Add, edit, and manage your interview experiences</li>
                <li>Record company name, your experience, and whether you were selected or not</li>
                <li>Gain insights and visualize trends in your interview journey</li>
                <li>Each experience entry is unique to help you avoid duplicates</li>
            </ul>
            <div className="mt-8 p-6 bg-gray-50 rounded shadow">
                <h2 className="text-xl font-semibold mb-2">Example Entry</h2>
                <p className="mb-1"><span className="font-medium">Company:</span> Acme Corp</p>
                <p className="mb-1"><span className="font-medium">Experience:</span> Technical round focused on React and system design. Friendly panel.</p>
                <p className="mb-1"><span className="font-medium">Selected:</span> Yes</p>
                <p className="text-xs text-gray-500">Each entry is unique and helps you track your journey.</p>
            </div>
        </div>
    )
}
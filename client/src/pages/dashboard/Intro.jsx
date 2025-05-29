import React from "react";

export default function Intro() {
    return (
        <div className="p-20 min-h-[200vh] bg-white shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Interview Experience Management App</h1>
            <p className="text-gray-600 mb-4">
                This app enables you to document, organize, and analyze your interview experiences, making it easier to prepare for future opportunities and share insights with others.
            </p>
            <ul className="list-disc text-gray-700">
                <li>Add, edit, and manage your interview experiences</li>
                <li>Track your progress and outcomes across different interviews</li>
                <li>Gain insights and visualize trends in your interview journey</li>
            </ul>
        </div>
    )
}
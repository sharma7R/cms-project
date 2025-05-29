import React from 'react';

function Developer(props) {
    return (
        <div
            className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg min-w-screen text-white bg-gradient-to-r from-purple-900 via-fuchsia-600 to-cyan-400"
        >
            <span className="text-2xl font-bold text-cyan-200">Developer page</span>
            <h1 className="text-3xl font-extrabold mt-4 mb-2 text-fuchsia-100">Developer Information</h1>
            <p className="mb-4 text-cyan-100">
                This page is dedicated to providing information about the developers behind this project. Here, you can find details about their roles, contributions, and how to contact them.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-200">Meet the Developers</h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>KATHIRAVAN B</strong></li>
                <li><strong>SAKTHIVEL K</strong></li>
                <li><strong>SHARMA R</strong></li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-200">Contact Information</h2>
            <p className="mb-4 text-cyan-100">
                If you have any questions or feedback, feel free to reach out to the developers via email or through our project's GitHub repository.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-200">Contributions</h2>
            <p className="mb-4 text-cyan-100">
                The developers are continuously working on improving the project. Contributions are welcome! You can contribute by submitting issues, pull requests, or suggestions on our GitHub page.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-200">Follow Us</h2>
            <p className="mb-4 text-cyan-100">
                Stay updated with the latest developments by following us on social media or subscribing to our newsletter.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-cyan-200">Thank You!</h2>
            <p className="mb-2 text-cyan-100">
                We appreciate your interest in our project and the hard work of our developers. Your support helps us to continue improving and expanding the features of this application.
            </p>
        </div>
    );
}

export default Developer;

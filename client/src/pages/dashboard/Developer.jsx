import React from 'react';

function Developer(props) {
    return (
        <div className="p-20 min-h-[200vh] bg-white shadow-md flex justify-center items-start w-[58rem]">
            <div className="max-w-2xl w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Meet the Developers</h1>
                <p className="text-gray-600 mb-4 text-center">
                    This page introduces the developers behind the Interview Experience Management App. Learn about their roles, contributions, and how to connect with them.
                </p>
                <ul className="list-disc text-gray-700 mb-4 pl-6">
                    <li><strong>KATHIRAVAN B</strong> – Frontend Developer ("Code Maestro")</li>
                    <li><strong>SAKTHIVEL K</strong> – Frontend Developer ("UI Artisan")</li>
                    <li><strong>SHARMA R</strong> – Team Leader &amp; Frontend ("Project Navigator")</li>
                </ul>
                <div className="mt-8 p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p className="mb-2 text-gray-700">
                        For questions or feedback, reach out via email or visit our project's GitHub repository.
                    </p>
                    <ul className="list-disc text-gray-600 pl-6">
                        <li>Email: <a href="mailto:sharmasai2005@example.com" className="text-blue-600 underline">sharmasai2005@example.com</a></li>
                        <li>GitHub: <a href="https://github.com/sharma7R/cms-project" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">github.com/sharma7R/cms-project</a></li>
                    </ul>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Contributions</h2>
                    <p className="mb-2 text-gray-700">
                        We welcome contributions! Submit issues, pull requests, or suggestions on our GitHub page to help us improve the app.
                    </p>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
                    <p className="mb-2 text-gray-700">
                        Thank you for supporting our project. Your feedback and involvement help us grow and enhance the application for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Developer;

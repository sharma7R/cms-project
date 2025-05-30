import React from 'react';

export default function Interview() {
    const [company, setCompany] = React.useState('');
    const [experience, setExperience] = React.useState('');
    const [selected, setSelected] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const [interviews, setInterviews] = React.useState([]);

    const handleDelete = (index) => {
        setInterviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInterview = {
            company,
            experience,
            selected,
            rating,
        };
        setInterviews(prev => [...prev, newInterview]);
        setCompany('');
        setExperience('');
        setSelected(false);
        setRating(0);
    };

    // StarRating component for selecting and displaying rating
    function StarRating({ value, onChange }) {
        return (
            <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        type="button"
                        onClick={() => onChange(value === num ? 0 : num)}
                        className="focus:outline-none"
                        aria-label={`Rate ${num} star${num > 0 ? 's' : ''}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={num <= value ? "#06b6d4" : "none"}
                            viewBox="0 0 24 24"
                            stroke="#06b6d4"
                            className="w-7 h-7"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.25l3.086 6.251L22 9.505l-5.007 4.617 1.179 6.873z" />
                        </svg>
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="p-20 min-h-[200vh] w-[58rem] bg-white shadow-md flex flex-col items-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-black-600 mb-8 mt-8">Interview Experience Management</h2>
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 w-full">
                    <div>
                        <label className="block text-black-700 font-semibold mb-2">
                            Company Name:
                            <input
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-cyan-400 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-2"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-black-700 font-semibold mb-2">
                            Interview Experience:
                            <textarea
                                value={experience}
                                onChange={e => setExperience(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-cyan-400 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-2"
                            />
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-black-700 font-semibold">
                            Selected:
                            <input
                                type="checkbox"
                                checked={selected}
                                onChange={e => setSelected(e.target.checked)}
                                className="ml-2 accent-cyan-500"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-black-700 font-semibold mb-2">
                            Rating:
                            <StarRating value={rating} onChange={setRating} />
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-cyan-600 text-black font-bold py-2 rounded-lg hover:bg-cyan-700 transition shadow-md mt-2">Submit</button>
                </form>
                <div className="mt-10 w-full">
                    <h3 className="text-xl font-bold text-cyan-700 mb-4">Stored Interviews</h3>
                    <ul>
                        {interviews.map((item, idx) => (
                            <li key={idx} className="mb-4 p-4 border border-cyan-200 rounded-xl bg-gray-50 text-gray-900 shadow flex flex-col gap-1">
                                <div><strong>Company:</strong> {item.company}</div>
                                <div><strong>Experience:</strong> {item.experience}</div>
                                <div><strong>Selected:</strong> {item.selected ? 'Yes' : 'No'}</div>
                                <div className="flex items-center gap-2">
                                    <strong>Rating:</strong>
                                    <span>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <svg
                                                key={num}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={num <= item.rating ? "#06b6d4" : "none"}
                                                viewBox="0 0 24 24"
                                                stroke="#06b6d4"
                                                className="w-5 h-5 inline"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.25l3.086 6.251L22 9.505l-5.007 4.617 1.179 6.873z" />
                                            </svg>
                                        ))}
                                    </span>
                                </div>
                                <button
                                    className="mt-2 px-3 py-1 bg-gray-500 text-black rounded hover:bg-red-700 w-max"
                                    onClick={() => handleDelete(idx)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect } from 'react';
import storageService from '../../service/storageService';

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

    // Load interviews from storage on mount
    useEffect(() => {
        const stored = storageService.getItem('interviews') || [];
        setInterviews(stored);
    }, []);

    // Save interviews to storage whenever they change
    useEffect(() => {
        storageService.setItem('interviews', interviews);
    }, [interviews]);

    // StarRating component for selecting and displaying rating
    function StarRating({ value, onChange }) {
        return (
            <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map(num => (
                    <button
                        key={num}
                        type="button"
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            onChange(num);
                        }}
                        className={`focus:outline-none ${num === value ? 'scale-110' : ''}`}
                        aria-label={`Rate ${num} star${num > 1 ? 's' : ''}`}
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={num <= value ? "#06b6d4" : "none"}
                            viewBox="0 0 24 24"
                            stroke="#06b6d4"
                            className="w-7 h-7 pointer-events-none"
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
        <div className="p-20 min-h-[90vh] w-[58rem] bg-[#fff7ed] shadow-md flex flex-col items-center border border-yellow-200 rounded-2xl" style={{boxShadow: '0 8px 32px 0 rgba(120, 72, 0, 0.18)'}}>
            <div className="w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-8 mt-8 text-center animate-bounce" style={{color: '#784800', letterSpacing: '0.02em'}}>Interview Experience Management</h2>
                <form onSubmit={handleSubmit} className="bg-[rgba(255,243,224,0.95)] rounded-xl shadow-lg p-8 flex flex-col gap-6 w-full border border-yellow-200">
                    <div>
                        <label className="block font-semibold mb-2" style={{color: '#784800'}}>
                            Company Name:
                            <input
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 mt-2"
                                style={{
                                    borderColor: '#e0c48c',
                                    background: '#fff7ed',
                                    color: '#784800',
                                    fontWeight: 500
                                }}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 " style={{color: '#784800'}}>
                            Interview Experience:
                            <textarea
                                value={experience}
                                onChange={e => setExperience(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 mt-2"
                                style={{
                                    borderColor: '#e0c48c',
                                    background: '#fff7ed',
                                    color: '#784800',
                                    fontWeight: 500
                                }}
                            />
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-semibold" style={{color: '#784800'}}>
                            Selected:
                            <input
                                type="checkbox"
                                checked={selected}
                                onChange={e => setSelected(e.target.checked)}
                                className="ml-2 accent-[#a67c52]"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2" style={{color: 'brown'}}>
                            Rating:
                            <StarRating value={rating} onChange={setRating} />
                        </label>
                    </div>
                    <button type="submit" className="w-full font-bold py-2 rounded-lg transition shadow-md mt-2" style={{background: '#784800', color: '#fff7ed', letterSpacing: '0.03em'}}
                        onMouseOver={e => {e.currentTarget.style.background = '#a67c52'; e.currentTarget.style.color = '#fff';}}
                        onMouseOut={e => {e.currentTarget.style.background = '#784800'; e.currentTarget.style.color = '#fff7ed';}}
                    >Submit</button>
                </form>
                <div className="mt-10 w-full">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#a67c52'}}>Stored Interviews</h3>
                    <ul>
                        {interviews.map((item, idx) => (
                            <li key={idx} className="mb-4 p-4 border rounded-xl shadow flex flex-col gap-1 bg-[rgba(255,243,224,0.95)] border-yellow-200" style={{color: '#784800'}}>
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
                                                fill={num <= item.rating ? "#a67c52" : "none"}
                                                viewBox="0 0 24 24"
                                                stroke="#a67c52"
                                                className="w-5 h-5 inline"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.25l3.086 6.251L22 9.505l-5.007 4.617 1.179 6.873z" />
                                            </svg>
                                        ))}
                                    </span>
                                </div>
                                <button
                                    className="mt-2 px-3 py-1 rounded w-max font-semibold transition"
                                    style={{background: '#784800', color: '#fff7ed'}}
                                    onMouseOver={e => {e.currentTarget.style.background = '#a67c52'; e.currentTarget.style.color = '#fff';}}
                                    onMouseOut={e => {e.currentTarget.style.background = '#784800'; e.currentTarget.style.color = '#fff7ed';}}
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

import React from 'react'

export default function Interview() {
const [steps, setSteps] = React.useState([
    { id: 1, name: 'Application Received', completed: true },
    { id: 2, name: 'Phone Screen', completed: false },
    { id: 3, name: 'Technical Interview', completed: false },
    { id: 4, name: 'HR Interview', completed: false },
    { id: 5, name: 'Offer', completed: false },
]);

const handleStepToggle = (id) => {
    setSteps(steps =>
        steps.map(step =>
            step.id === id ? { ...step, completed: !step.completed } : step
        )
    );
};

return (
    <div>
        <h2>Interview Process Management</h2>
        <ul>
            {steps.map(step => (
                <li key={step.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={step.completed}
                            onChange={() => handleStepToggle(step.id)}
                        />
                        {step.name}
                    </label>
                </li>
            ))}
        </ul>
    </div>
);
}

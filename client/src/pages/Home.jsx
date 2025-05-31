import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [displayedText, setDisplayedText] = React.useState('');
  const fullText = 'Interview Experience Management';
  const typingSpeed = 90; // ms per character

  React.useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, idx + 1));
      idx++;
      if (idx === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    let idx = 0;
    let typing = true;
    let interval;

    const type = () => {
      interval = setInterval(() => {
        if (typing) {
          setDisplayedText(fullText.slice(0, idx + 1));
          idx++;
          if (idx === fullText.length) {
            typing = false;
            clearInterval(interval);
            setTimeout(() => {
              interval = setInterval(erase, typingSpeed);
            }, 1000);
          }
        }
      }, typingSpeed);
    };

    const erase = () => {
      setDisplayedText(fullText.slice(0, idx - 1));
      idx--;
      if (idx === 0) {
        clearInterval(interval);
        typing = true;
        setTimeout(type, 500);
      }
    };

    type();

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="home-container"
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: `url('/download.jpeg') center center/cover no-repeat, #f5f7fa`,
        zIndex: 1,
        paddingLeft: '8vw',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff', textShadow: '2px 2px 8px #222', fontWeight: 'bold', minHeight: '3.5rem' }}>
        <span>
          {displayedText}
          <span style={{ color: '#d2691e', fontWeight: 'bold' }}>
            {displayedText.length < fullText.length ? '|' : ''}
          </span>
        </span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#e0e0e0', maxWidth: 600, textAlign: 'left', textShadow: '1px 1px 6px #222', fontWeight: 'bold' }}>
        Effortlessly manage, share, and discover interview experiences.<br />
        Empower candidates and recruiters with a collaborative platform for interview preparation and feedback.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <button
          onClick={() => navigate('/login')}
          style={{ padding: '0.8rem 2rem', fontSize: '1rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '1px 1px 8px #222' }}
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/about')}
          style={{ padding: '0.8rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.85)', color: '#007bff', border: '2px solid #007bff', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '1px 1px 8px #222' }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;

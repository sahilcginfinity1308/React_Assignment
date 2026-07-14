import { useEffect, useMemo, useState } from 'react';
import ProfileCard from './ProfileCard';

const skills = [
  { id: 1, name: 'React' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'CSS' },
  { id: 4, name: 'UI Design' },
];

function App() {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [status, setStatus] = useState('Learning React!');

  useEffect(() => {
    document.title = `Ada — ${likes} likes`;
  }, [likes]);

  const handleLike = () => setLikes((count) => count + 1);
  const handleToggle = () => setShowMore((value) => !value);
  const handleStatusChange = (event) => setStatus(event.target.value);

  const skillList = useMemo(
    () => skills.map((skill) => <li key={skill.id}>{skill.name}</li>),
    [],
  );

  return (
    <div className="app-shell">
      <div className="card-container">
        <ProfileCard
          name="Ada Lovelace"
          bio="A tiny app builder who loves code, style, and learning new React tricks."
        >
          <div className="status-editor">
            <label htmlFor="status-input">Status</label>
            <input
              id="status-input"
              type="text"
              value={status}
              onChange={handleStatusChange}
              placeholder="Type your status"
            />
          </div>

          <button className="like-button" type="button" onClick={handleLike}>
            Like ({likes})
          </button>

          <div className="skills-section">
            <h3>Skills</h3>
            <ul>{skillList}</ul>
          </div>

          <button className="toggle-button" type="button" onClick={handleToggle}>
            {showMore ? 'Show less' : 'Show more'}
          </button>

          {showMore ? (
            <p className="more-text">
              Ada is exploring React state, props, JSX, and hooks to complete a mini profile card assignment.
            </p>
          ) : null}
        </ProfileCard>
      </div>
    </div>
  );
}

export default App;

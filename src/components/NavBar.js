import React, { useContext } from 'react';
import AddIssueButton from './AddIssueButton';
import { AppContext } from '../context/AppContext';

const PauseButton = () => {
  const { pause } = useContext(AppContext);
  return (
    <div className="button" onClick={pause} style={{ flex: 1, background: 'orange' }}>
      Pause
    </div>
  );
};

const ClearButton = () => {
  const { clearIssues } = useContext(AppContext);
  return (
    <div className="button" onClick={clearIssues} style={{ width: 60, background: 'red' }}>
      Clear
    </div>
  );
};

const NavBar = () => {
  const { token, setToken, project, setProject } = useContext(AppContext);
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <AddIssueButton />
      <PauseButton />
      <ClearButton />
      {/*
      <SaveIssues />
      
      <SendToGitlabButton />
      */}
      <div>
        <div
          className="button"
          style={{
            height: 26,
            padding: 0
          }}>
          <input
            style={{
              height: 25,
              lineHeight: '0.8em',
              padding: 0
            }}
            placeholder="gitlab-token"
            value={token}
            onChange={e => setToken(e.target.value)}
          />
        </div>
        <div
          className="button"
          style={{
            height: 26,
            padding: 0
          }}>
          <input
            style={{
              height: 25,
              lineHeight: '0.8em',
              padding: 0
            }}
            placeholder="project-id"
            value={project}
            onChange={e => setProject(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

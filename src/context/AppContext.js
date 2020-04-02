import React, { useState, useEffect } from 'react';
import { getIssueName } from '../util/util';
import useInterval from '../hooks/useInterval';

const AppContext = React.createContext();

export { AppContext };

export default ({ children }) => {
  const data = useAppStore();
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

const getInitialData = () => {
  return {
    issues: sessionStorage && sessionStorage.getItem('issues') ? JSON.parse(sessionStorage.getItem('issues')) : [],
    projectId: sessionStorage && sessionStorage.getItem('projectId') ? sessionStorage.getItem('projectId') : '10375892',
    token: sessionStorage && sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
  };
};

const useAppStore = () => {
  const [issues, setIssues] = useState(getInitialData().issues);
  const [activeIssue, setActiveIssue] = useState(null);
  const [token, setToken] = useState(getInitialData().token);
  const [project, setProject] = useState(getInitialData().projectId);

  useEffect(() => {
    if (sessionStorage) {
      sessionStorage.setItem('issues', JSON.stringify(issues));
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('project', project);
    }
  }, [issues, token, project]);

  const addIssue = async issueId => {
    const newIssueTitle = await getIssueName(issueId, token, project);
    setIssues([...issues.filter(issue => issue.id !== issueId), { title: newIssueTitle, id: issueId, timer: 0 }]);
  };
  useInterval(() => {
    if (activeIssue) {
      setIssues(
        issues.map(issue => {
          if (issue.id === activeIssue) {
            issue.timer++;
          }
          return issue;
        })
      );
    }
  });
  const clearIssues = () => setIssues([]);
  const pause = () => setActiveIssue(null);

  return {
    issues,
    setActiveIssue,
    token,
    setToken,
    project,
    setProject,
    addIssue,
    pause,
    clearIssues
  };
};

import React, { useState, useContext } from 'react';
import { useInterval } from '../hooks/useInterval';
import { toHHMMSS } from '../util/util';
import { AppContext } from '../context/AppContext';

const IssueItem = ({ issue }) => {
  const { setActiveIssue } = useContext(AppContext);

  const text = issue.title === issue.id ? issue.title : `#${issue.id} ${issue.title}`;

  return (
    <div className="button" onClick={() => setActiveIssue(issue.id)}>
      {text}
      <p>{toHHMMSS(issue.timer)}</p>
    </div>
  );
};

export default IssueItem;

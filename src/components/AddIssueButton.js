import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useAddIssue = () => {
  const { addIssue } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  const [issue, setIssue] = useState('');
  const input = useRef(null);
  const buttonHandler = () => {
    setClicked(true);
  };
  useEffect(() => {
    if (clicked) {
      input.current.focus();
    }
  }, [clicked]);
  const onEnter = () => {
    setClicked(false);
    addIssue(issue);
    setIssue('');
  };

  return { buttonHandler, onEnter, clicked, input, setIssue, issue };
};

const AddIssueButton = () => {
  const { buttonHandler, onEnter, clicked, input, setIssue, issue } = useAddIssue();
  return (
    <div className="button" style={{ flex: 1, background: 'white' }} onClick={buttonHandler}>
      <input
        ref={input}
        type="text"
        style={{
          display: clicked ? undefined : 'none'
        }}
        value={issue}
        placeholder="#Issue number"
        onChange={e => {
          setIssue(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') onEnter();
        }}
      />
      <span
        style={{
          display: clicked ? 'none' : undefined
        }}>
        Add
      </span>
    </div>
  );
};

export default AddIssueButton;

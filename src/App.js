import React, { useContext } from 'react';
import './styles.css';
import AppStore, { AppContext } from './context/AppContext';
import IssueItem from './components/IssueItem';
import NavBar from './components/NavBar';

const Main = () => {
  const { issues } = useContext(AppContext);
  return (
    <div
      className="issueWrapper"
      style={{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {issues.map(item => (
        <IssueItem key={item.id} issue={item} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <AppStore>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </AppStore>
  );
}

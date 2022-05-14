
import './App.css';

function Show (props){
  return(
    <h1>You have selected {props.language} language</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Show language="English"/>
          <Show language="Ukrainian"/>
          <Show language="Chinese"/>
          <Show language="French"/>
          <Show language="Polish"/>
        </div>
      </header>
    </div>
  );
}

export default App;

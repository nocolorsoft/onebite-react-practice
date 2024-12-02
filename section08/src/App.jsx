import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from './components/List.jsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Header />
            <Editor />
            <List />
        </div>
    );
}

export default App;
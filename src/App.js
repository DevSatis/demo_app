import './App.css';
import Home from './components/home/Home';
import LeftNav from './components/LeftNav';

function App(){
    return(
        <div className='App'>
            <div className='App-header'>
                <h1>Text Editor</h1>
            </div>
            {/* <div className='editor'>
                <TextEditor />
                
            </div>
            <div className='leftnav'>
               <LeftNav /> 
            </div> */}
            <div className="home">
                <Home />
            </div>

        </div>
    );
}
export default App;
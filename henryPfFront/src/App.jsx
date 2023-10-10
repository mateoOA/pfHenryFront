import './App.css'

function App() {
    return (
    <>    
    <input type='file' name='' id='' onChange={ e => console.log(e.target.files[0])}/>              
    </>
  )
}

export default App

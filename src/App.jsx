import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'

const api = {
    key: "2ded579bd3776ca1a35191962283d553",
    base: "https://api.openweathermap.org/data/2.5/"
}
function App() {


  return (
    <>
        <React.Fragment>
            <CssBaseline />
            {/* The rest of your application */}
        </React.Fragment>
        <div className="app">
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..."/>
                </div>
            </main>
        </div>
    </>
  )
}

export default App

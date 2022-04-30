import React from 'react'
import { Catalog } from './Catalog'
import "./index.css"
import { SignUpForm } from "./SignUpForm"


function App() {
    return (
        <div>
            <SignUpForm />
            <Catalog />
        </div>
    );
}

export default App;

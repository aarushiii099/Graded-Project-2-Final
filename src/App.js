import React from 'react';
import './App.css';
import 'h8k-components';
import Header from "./Component/Header"
const title = "SPA - LeaderBoard";


function App() {
	return (
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			 <Header />			
		</div>
	);
}

export default App;

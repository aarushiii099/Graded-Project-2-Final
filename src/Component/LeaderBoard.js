import React from 'react';
import { response } from '../response';
import { useEffect, useState } from "react"
import {useNavigate,Navigate} from "react-router-dom"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"


let index=0;
function LeaderBoard(props) {

	const [data,setData]=useState([])
	const navigate=useNavigate()
		const temp=response.list

	useEffect(()=>{
		setData([...temp]); 
    },[])

	
	return (
		<div className="text-center mt-50">
			
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
			
			{data.map((item)=>(
				<>
							
					<tbody data-testid="app-tbody">
						<tr key={item.rank}>
							<td data-testid={`rank-${index}`}>{item.rank}</td>
							<td data-testid={`name-${index}`}>{item.name}</td>
							<td data-testid={`points-${index}`} className="numeric">{item.points}</td>
							<td data-testid={`age-${index}`} className="numeric">{item.age}</td>
						</tr>
					</tbody>

					</>					
			))}
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
import React from 'react';
// import ReactDOM from 'react-dom/client'
import { response } from '../response';
import { useEffect, useState } from "react"

// import {Switch} from "react-router-dom"
let index=0;

export default function Rank(){
	
	const [data,setData]=useState([])
	

	const temp=response.list

	useEffect(()=>{		
        temp.sort(function(x,y){return x["age"]-y["age"]})
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
			{/* {console.log(data)} */}
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
import React from 'react'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Rank from "./Rank"
import LeaderBoard from "./LeaderBoard"
import Name from "./Name"
import Points from "./Points"
import Age from "./Age"

const Header=()=>{
    return(
        <div className="text-center mt-50">
            <BrowserRouter>
            <div>
					<button data-testid="route-rank" className='outlined' type="button"><Link to="/rank">Rank</Link></button>
					<button data-testid="route-name" className='outlined' type="button"><Link to="/name">Name</Link></button>
					<button data-testid="route-points" className='outlined' type="button"><Link to="/points">Points</Link></button>
					<button data-testid="route-age" className='outlined' type="button"><Link to="/age">Age</Link></button>
				</div>

                <Routes>

                
                <Route exact path="/" element={<LeaderBoard />}></Route>
                <Route exact path="/rank" element={<Rank />}></Route>
                <Route exact path="/name" element={<Name />}></Route>
                <Route exact path="/points" element={<Points />}></Route>
                <Route exact path="/age" element={<Age />}></Route>

                </Routes>

            </BrowserRouter>
						
		</div>


    );

}
export default Header;
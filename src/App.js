import { useState } from "react";
import RentForm from "./components/RentForm";


function App() {
  const [vehData,setVehData] = useState()
  useEffect(()=>{
         let data= axios.get('/vehicle') 
         .then(
          setVehData(data)
         )
  },[])
  return (
    <div className="App">
      <h1 className='bg-danger text-white text-center p-2 m-1'>Vehicle Rent App</h1>
      <div className='card'>
          <img className='card-img-top' src/>
          <div className='card-body'>
             {
                vehData.map((daata)=>
                {
                    return (
                      <>
                      <h5 className="card-title">{daata.type}</h5>
                      <p className="card-text">{daata.model}</p>
                      <a href="#" className="btn btn-primary">Go</a>
                      </>
                    )
                     
                }
                )
             }
          </div>
      </div>
      <RentForm />
    </div>
  );
}

export default App;

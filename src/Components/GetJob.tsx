import React, {useState, useEffect} from 'react';

interface Job {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    isCompleted: boolean;
  }

  function MyComponent ()  {
    let [data, setdata] = useState<Job[]>([])
    
      useEffect(() => {
        fetch("https://localhost:7075/api/Job/Get")
        .then(response => response.json())
            // 4. Setting *data*
        .then(data => setdata(data))
      },[])
      console.log(data[0]);
    return (
      <ol style={{width:500}}>
        {data.map(item => (
        <li key={item.id}>
          <h5>{item.name}</h5>
          <ul>
            <li className='row'>
              <div className='col-3'>
              <h6>Start Date:</h6>
              </div>
              <div className='col-9'>
              <h6>{item.startDate.toString()}</h6>
              </div>
            </li>
            <li className='row'>
              <div className='col-3'>
              <h6>End Date:</h6>
              </div>
              <div className='col-9'>
              <h6>{item.endDate.toString()}</h6>
              </div>
            </li>
            <li className='row'>
              <div className='col-3'>
              <h6>Check:</h6>
              </div>
              <div className='col-9'>
              <h6>{item.isCompleted ? "Checked":"Uncheck"}</h6>
              </div>
            </li>
            
          </ul>
        </li>
      ))}
    </ol>
    );
  };

  export default MyComponent;
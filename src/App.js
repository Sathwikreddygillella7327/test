import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Test from './CardComponent'
import { MDBCol } from "mdbreact";
import { Button } from 'reactstrap';



export default function App() {
  const [jobs, setjobs] = useState([]);
  const [search, setsearch] = useState([]);
  const [type, settype] = useState("title");
  const [arr,setarr]=useState([]);
  const [placeholder, setplaceholder] = useState("search");

  function handleCategory() {
    settype("category");
    setplaceholder("search by category");
  }

  function handleJobtype() {
    settype("job_type");
    setplaceholder("search by job_type");
  }
  function handleSort() {
      const arr1 = jobs.sort((a, b) => b.publication_date - a.publication_date);
    console.log(arr1);
    settype("sort");
    setarr(arr1);

  }

  useEffect(() => {



    async function firstTime() {

      try {

        const resp = await axios.get("https://remotive.io/api/remote-jobs");
        console.log(resp.data);

        setjobs(resp.data.jobs);
      }

      catch (err) {
        console.log(err);
      }

    } firstTime();
  }, []);


    if(type==="sort"){
      return(
        <div>
        <div align='center'><MDBCol md="6">
        <input className="form-control" type="text" placeholder={placeholder} value={search} onChange={(e) => setsearch(e.target.value)} aria-label="Search" />
      </MDBCol></div>
      <div>
        <Button color="primary" align='center' onClick={handleCategory}>Searchby Category</Button>
        <Button color="primary" align='center' onClick={handleJobtype}>Searchby JobType</Button>
        
      </div>
        <div>
          {arr?.map((job,index)=>{
            
              if (job.title.toLowerCase().includes(search.toString().toLowerCase())) {
                return (<Test key={index} job={job} />);
              }
              else {
                return (
                  <div></div>);
              }
            }
            
          )}
        </div></div>
      );
    }
    else{
      return(
<div>
      <div align='center'><MDBCol md="6">
        <input className="form-control" type="text" placeholder={placeholder} value={search} onChange={(e) => setsearch(e.target.value)} aria-label="Search" />
      </MDBCol></div>
      <div>
        <Button color="primary" align='center' onClick={handleCategory}>Searchby Category</Button>
        <Button color="primary" align='center' onClick={handleJobtype}>Searchby JobType</Button>
        <Button color="primary" align='center' onClick={handleSort}>Sort by Publication date</Button>
        
      </div>
      <div>
        {jobs.map((job, index) => {
          if (type === "title") {
            if (job.title.toLowerCase().includes(search.toString().toLowerCase())) {
              return (<Test key={index} job={job} />);
            }
            else {
              return (
                <div></div>);
            }
          }
          else if (type === "category") {
            if (job.category.toLowerCase().includes(search.toString().toLowerCase())) {
              return (<Test key={index} job={job} />);
            }
            else {
              return (
                <div></div>);
            }



          }
          else {
            if (job.job_type.toLowerCase().includes(search.toString().toLowerCase())) {
              return (<Test key={index} job={job} />);
            }
            else {
              return (
                <div></div>);
            }
          }

          })}

      </div>
      
    </div>
      );

    }

    

}

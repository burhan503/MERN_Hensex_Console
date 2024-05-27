import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Foorter from './Foorter';
import Loading from './Loading';
export default function Dealer() {
  const [getdata, setGetData] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [loading, setLoading] = useState([])
  console.log(dealer)
  useEffect(() => {
    // Simulate data fetching with a setTimeout
    setTimeout(() => {
      axios
        .get('link here ')
        .then((res) => {
          setGetData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000); // Delay for 2 seconds (adjust as needed)
  }, []);
  return (
    <>
      <Navbar />
      <div className='container-md'>
        <div className='row mt-2 p-2'>
          <div className='col-lg-12'>
            <Link to="/admin_access_control"><button className='btn btn-success'>Back</button></Link>
          </div>
        </div>
        <div className='row rounded'>
                    <div className='col col-md-12 '>
                        <div className='d-flex p-2 bd-highlight'>
                            <div className="input-group input-group-sm">
                                <span className="input-group-text text-sm" id="inputGroup-sizing-lg" >Search</span>
                                <input className="my-2 my-lg-6 form-control-sm " placeholder='A11609...' type="text" class="form-control" aria-label="Sizing example input"
                                    onChange={(e) => setDealer(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        <div className='col-lg-12 mt-3 table-responsive'>
          <table className="table  table-striped">
            <thead>
              <tr className='table-dark table-responsive'>
                <th>ClientId</th>
                <th>ClientName</th>
                <th>ROSHAN THANVI</th>
                <th>MOOLCHAND</th>
                <th>GAURAV RATHI</th>
              </tr>
            </thead>
            {loading ? (
              <Loading />
            ) : (
              <tbody>
                {
                  getdata.filter((item) => {
                    return dealer === '' ? item : item.ClientId.toLowerCase().includes(dealer)
                  }).map((item) => {
                    return (
                      <>
                        <tr key={item.id} className="table-light">
                          <td>{item.ClientId}</td>
                          <td>{item.ClientName}</td>
                          <td>{item.PrefferedDealer1}</td>
                          <td>{item.PrefferedDealer2}</td>
                          <td>{item.PrefferedDealer3}</td>
                        </tr>
                      </>
                    );
                  })}

              </tbody>
            )}
          </table>
        </div>
      </div>
      <Foorter />
    </>
  )
}

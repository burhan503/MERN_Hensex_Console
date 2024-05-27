import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Foorter from './Foorter';
export default function PayIn() {
  const [getdata, setGetData] = useState([]);
  const [payin,setPayIN] = useState([]);
  const [loading, setLoading] = useState([])
  console.log(payin)
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
        <div className='row mt-2 p-2'>
        <div className='row rounded'>
                    <div className='col col-md-12 '>
                        <div className='d-flex p-2 bd-highlight'>
                            <div className="input-group input-group-sm">
                                <span className="input-group-text text-sm" id="inputGroup-sizing-sm" >Check Payin</span>
                                <input className="my-2 my-lg-6 form-control-sm " placeholder='A11609...' type="text" class="form-control" aria-label="Sizing example input"
                                    onChange={(e) => setPayIN(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

          <div className='col-lg-12 mt-3 table-responsive'>
            <table className="table table-striped table-bordered">
              <thead>
                <tr className='table-dark  table-responsive'>
                  <th>User-ID</th>
                  <th>Group</th>
                  <th>Exchange</th>
                  <th>Deposit</th>
                  <th>BankID</th>
                  <th>Client Account</th>
                  <th>Date</th>
                  <th>Why ?</th>
                  <th>Description</th>
                </tr>
              </thead>
              {loading ? (
                <Loading />
              ) : (
                <tbody>
                  {
                    getdata.filter((item) => {
                      return payin === '' ? item : item.User.toLowerCase().includes(payin)
                    }).map((item) => {
                      return (
                        <>
                          <tr key={item.id} className="table-light">
                            <td>{item.User}</td>
                            <td>{item.Group}</td>
                            <td>{item.Exchange}</td>
                            <td>{item.Deposit}</td>
                            <td>{item.BankID}</td>
                            <td>{item.Cliacc}</td>
                            <td>{item.Date}</td>
                            <td>{item.ResMsg}</td>
                            <td>{item.Desc}</td>
                          </tr>
                        </>
                      );
                    })}

                </tbody>
              )}
            </table>

          </div>
        </div>
      </div>
      <Foorter/>
    </>
  )
}

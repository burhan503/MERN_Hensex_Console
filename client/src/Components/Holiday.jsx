import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Foorter from './Foorter';
export default function Holiday() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mt-2 p-2'>
          <div className='col-lg-12'>
            <Link to="/admin_access_control"><button className='btn btn-success'>Back</button></Link>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 mt-4">
              <div class="data_table table-responsive">
                <table id="example" class="table table-responsive table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Foorter />
      </>
      )
}

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import './Dashboard.css'
import { FiCornerRightDown } from "react-icons/fi";
import { BiFolder } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Foorter from './Foorter';
export default function Dashboard() {
    const [myData, setMyData] = useState([]);
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState([])
    useEffect(() => {
        // Simulate data fetching with a setTimeout
        setTimeout(() => {
            axios
                .get('https://script.google.com/macros/s/AKfycbyUHeOmDAFVnx9bvqZQMolyb37Bd0KFphqzxWGfaDDdwOaeIeYQzW0qZUHt5alXOQ6u8w/exec?action=getDealer')
                .then((res) => {
                    setMyData(res.data);
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
                <div className='row'>
                    <div className='col-lg-12 '>
                        <div className='row mt-4 rounded-top'>
                            <div className='col-xxl-3 col-md-4'>
                                <div className='card info-card sales-card '>
                                    <div className="card-body payout">
                                        <h5 className="card-title ">Pay-out <span>| 14</span><span><FiCornerRightDown fontSize={20} className='text-black' /></span></h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xxl-3 col-md-4'>
                                <div className='card info-card sales-card'>
                                    <div className="card-body sales">
                                        <h5 className="card-title">Pay-In <span>| </span><Link to="/check_Pay_In"><span><BiFolder fontSize={20} className='text-black' /></span></Link></h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-3 col-md-4'>
                                <div className='card info-card sales-card'>
                                    <div className="card-body dealer">
                                        <h5 className="card-title">Dealer Client Map <span>|  </span> <Link to="/dealer_mapping"><span><BiFolder fontSize={20} className='text-black' /></span></Link></h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-3 col-md-4'>
                                <div className='card info-card sales-card'>
                                    <div className="card-body holiday">
                                        <h5 className="card-title">Holiday Master <span>| </span><Link to="/holiday"><span><BiFolder fontSize={20} className='text-black' /></span></Link></h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className='container-md'>
                <div className='row rounded'>
                    <div className='col col-md-12'>
                        <div className='d-flex p-2 bd-highlight'>
                            <div class="input-group input-group-sm">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Enter Client ID</span>
                                <input className="my-2 my-lg-6 form-control-sm form-control" placeholder='A11609...' type="text"  aria-label="Sizing example input"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Payout Report Generat Here */}
            <div className='container mt-4'>
                <div className='row'>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr className='table-dark table-responsive'>
                                    <th>Transfer</th>
                                    <th>ClientID</th>
                                    <th>GroupID</th>

                                    <th>Amount</th>
                                    <th>Exchange</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            {loading ? (
                                <Loading />
                            ) : (
                                <tbody>
                                    {
                                        myData.filter((post) => {
                                            return search === '' ? post : post.ClientID.toLowerCase().includes(search)
                                        }).map((post) => {
                                            const { id, Id_transfer, ClientID, GroupID, Amount, Exchange, Date } = post;
                                            return (

                                                <tr key={id} className="table-light">
                                                    <td>{Id_transfer}</td>
                                                    <td>{ClientID}</td>
                                                    <td>{GroupID}</td>
                                                    <td>{Amount}</td>
                                                    <td>{Exchange}</td>
                                                    <td>{Date}</td>

                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
            <Foorter />
        </>

    )
}

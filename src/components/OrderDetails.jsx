import React from 'react';
import { FaTimes, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import './OrderDetails.css';

const OrderDetails = () => {
    return (
        <div className="container-fluid p-0">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
                <div className="d-flex align-items-center gap-2">
                    <h5 className="mb-0 fw-bold text-secondary">Details for Order ID - <span className="text-dark">OKAMM2600591327</span> <span className="text-muted">(35837902)</span></h5>
                    <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3">Order Delivered</span>
                </div>
                <button className="btn btn-link text-muted p-0"><FaTimes size={20} /></button>
            </div>

            <div className="row g-0">
                {/* Left Panel */}
                <div className="col-md-3 border-end bg-white" style={{ minHeight: 'calc(100vh - 60px)' }}>
                    <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="fw-bold mb-0">Delivery & Order Information</h6>
                            <FaExternalLinkAlt className="text-muted small" style={{ fontSize: '0.8rem', transform: 'scaleX(-1)' }} />
                        </div>

                        <div className="mb-4">
                            <small className="text-muted d-block mb-1">Delivery Note</small>
                            <p className="mb-1 small">Order delivered <span className="text-danger fw-bold">Without OTP</span> - Delivered from Dashboard</p>
                            <p className="mb-0 small text-muted">Reference Membership ID - <span className="text-primary">OKASM2600578253</span></p>
                        </div>

                        <div className="mb-4 border-top pt-3">
                            <small className="text-muted d-block mb-1">Patient Name</small>
                            <h6 className="fw-bold mb-0">SRIVATSAV M</h6>
                        </div>

                        <div className="mb-4">
                            <small className="text-muted d-block mb-1">Age</small>
                            <h6 className="fw-bold mb-0">28 Years / Male</h6>
                        </div>

                        <div className="mb-4">
                            <small className="text-muted d-block mb-1">Address Details</small>
                            <h6 className="fw-bold mb-1">SRIVATSAV</h6>
                            <p className="mb-0 small text-muted">L 32</p>
                            <p className="mb-0 small text-muted">JST , 2nd A Main Road, Bangalore - 560102</p>
                            <p className="mb-0 small text-muted">Ph.No - <span className="text-primary">7893092502</span></p>
                        </div>

                        <div className="border-top pt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <small className="text-muted d-block">Order Status</small>
                                    <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill">Order Delivered</span>
                                </div>
                                <div className="text-end">
                                    <small className="text-muted d-block">Order Date</small>
                                    <small className="fw-bold">Nov 21, 2025</small>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <small className="text-muted d-block">Store ID</small>
                                    <small className="fw-bold">INKABLR00700</small>
                                </div>
                                <div className="text-end">
                                    <small className="text-muted d-block">Store Name</small>
                                    <small className="fw-bold">MEDICINE WAREHOUSE KUMABALGODU</small>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div>
                                    <small className="text-muted d-block">Delivery Type</small>
                                    <small className="fw-bold">Home Delivery</small>
                                </div>
                                <div className="text-end">
                                    <small className="text-muted d-block">E Presc Status</small>
                                    <small className="fw-bold">Done by OTG07784C</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-md-9 bg-light">
                    {/* Tabs */}
                    <div className="bg-white border-bottom px-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs border-bottom-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-primary border-0 border-bottom border-primary border-2 fw-bold bg-transparent py-3" href="#">Order Status</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted border-0 py-3" href="#">Track Order</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted border-0 py-3" href="#">Tickets</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted border-0 py-3" href="#">Return Request</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted border-0 py-3 d-flex align-items-center gap-2" href="#">
                                        Communications <FaExternalLinkAlt size={10} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-muted border-0 py-3" href="#"><FaFileAlt /></a>
                                </li>
                            </ul>
                            <button className="btn btn-link text-primary text-decoration-none fw-bold small">Create Ticket</button>
                        </div>
                    </div>

                    <div className="p-3">
                        {/* Payment Info */}
                        <div className="bg-white border rounded mb-3">
                            <div className="table-responsive">
                                <table className="table table-borderless mb-0 align-middle">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold text-secondary" style={{ width: '25%' }}>PAYMENT(1185090099)</td>
                                            <td className="fw-bold" style={{ width: '30%' }}>20251121210530000198676447070768222</td>
                                            <td style={{ width: '15%' }}>Credit Card</td>
                                            <td style={{ width: '15%' }}>paytm gateway</td>
                                            <td className="text-end" style={{ width: '15%' }}>
                                                <div className="small text-muted">Nov 21, 2025 17:13</div>
                                                <div className="fw-bold">₹9,501.29</div>
                                            </td>
                                        </tr>
                                        <tr className="border-top">
                                            <td colSpan="4" className="text-end fw-bold">Total Settlement Amount</td>
                                            <td className="text-end fw-bold">₹9,501.29</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Edit Table */}
                        <div>
                            <h6>Edit Details</h6>
                        </div>

                        <div className="bg-white border rounded table-responsive">
                            <table className="table mb-0 align-middle text-nowrap">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="border-bottom-0 py-3">Product Name</th>
                                        <th className="border-bottom-0 py-3 text-center">Removed Quantity</th>
                                        <th className="border-bottom-0 py-3 text-center">Edited By</th>
                                        <th className="border-bottom-0 py-3 text-center">Edited Date</th>
                                        <th className="border-bottom-0 py-3 text-center">Approved By</th>
                                        <th className="border-bottom-0 py-3 text-center">Approved Date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3">INTALITH CR 450MG TAB</td>
                                        <td className="py-3 text-center">90</td>
                                        <td className="py-3 text-center">OTGXXXXX-Vardhan R</td>
                                        <td className="py-3 text-center">Nov 21, 2025 17:13</td>
                                        <td className="py-3 text-center"> OTGXXXXX-Sandeep G</td>
                                        <td className="py-3 text-center">Nov 21, 2025 18:23</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <br></br>

                        {/* Refund Details Header */}
                        <div className="mb-3">
                            <h6 className="fw-bold border-start border-4 border-dark ps-2 mb-3">Refund Details</h6>

                            <div className="row g-3 mb-3">
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded border">
                                        <small className="text-muted d-block mb-1">Settlement Id</small>
                                        <div className="fw-bold fs-5">48762111</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded border">
                                        <small className="text-muted d-block mb-1">status</small>
                                        <div className="fw-bold fs-5">refund done</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded border d-flex justify-content-between align-items-start">
                                        <div>
                                            <small className="text-muted d-block mb-1">Date</small>
                                            <div className="fw-bold fs-5">Nov 21, 2025</div>
                                        </div>
                                        <FaExternalLinkAlt className="text-muted" style={{ transform: 'rotate(90deg)' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-4">
                                    <div className="bg-white p-3 rounded border">
                                        <small className="text-muted d-block mb-1">Refund Id</small>
                                        <div className="fw-bold fs-5">2691132</div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="bg-white p-3 rounded border d-flex justify-content-between align-items-start">
                                        <div>
                                            <small className="text-muted d-block mb-1">Total Amount</small>
                                            <div className="fw-bold fs-5">320.62</div>
                                        </div>
                                        <FaExternalLinkAlt className="text-muted" style={{ transform: 'rotate(90deg)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Table */}
                        <div className="bg-white border rounded overflow-hidden">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="border-bottom-0 py-3">Product Name</th>
                                        <th className="border-bottom-0 py-3">Refund Quantity</th>
                                        <th className="border-bottom-0 py-3">Refund Reason</th>
                                        <th className="border-bottom-0 py-3 text-end">MRP</th>
                                        <th className="border-bottom-0 py-3 text-end">Rate</th>
                                        <th className="border-bottom-0 py-3 text-end">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3">INTALITH CR 450MG TAB</td>
                                        <td className="py-3">90</td>
                                        <td className="py-3">CANCEL</td>
                                        <td className="py-3 text-end">₹4.453</td>
                                        <td className="py-3 text-end">₹3.5624</td>
                                        <td className="py-3 text-end">₹320.616</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="5" className="text-end py-3 border-0">Service Charges</td>
                                        <td className="text-end py-3 border-0">₹0</td>
                                    </tr>
                                    <tr className="bg-light">
                                        <td colSpan="5" className="text-end fw-bold py-3">Total Refund Amount</td>
                                        <td className="text-end fw-bold py-3">₹320.62</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

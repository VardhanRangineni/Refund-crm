import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunicationSearch.css';

const CommunicationSearch = () => {
    const [hoveredMessage, setHoveredMessage] = useState(null);

    const data = [
        {
            message: "Dear Cstmr, your MedPlus order OKAMM2600591327 was d...",
            fullMessage: "Dear Cstmr, your MedPlus order OKAMM2600591327 was delivered.",
            commId: "56435596",
            orderId: "35837902",
            refundId: "2691132",
            date: "Nov 22, 2025 21:53",
            csrId: "SMS",
            orderType: "MART",
            reason: "-",
            mode: "messageout"
        },
        {
            message: "Dear MedPlus Cstmr, your order OKAMM2600591327 is con...",
            fullMessage: "Dear MedPlus Cstmr, your order OKAMM2600591327 is confirmed.",
            commId: "56399485",
            orderId: "35837902",
            refundId: "",
            date: "Nov 22, 2025 09:31",
            csrId: "SMS",
            orderType: "MART",
            reason: "-",
            mode: "messageout"
        },
        {
            message: "Your prescription has been submitted. Our agent will call yo...",
            fullMessage: "Your prescription has been submitted. Our agent will call you shortly.",
            commId: "56399486",
            orderId: "12345678",
            refundId: "",
            date: "Nov 12, 2024 09:31",
            csrId: "SMS",
            orderType: "PRESCRIPTION",
            reason: "-",
            mode: "messageout"
        },
        {
            message: "Your refund against order ID OKAMM2600591327 is initiate...",
            fullMessage: "Your refund against order ID OKAMM2600591327 is initiated for Rs. 320.62. It will take 30 working days to reflect in your account. - MedPlus",
            commId: "65432141",
            orderId: "35837902",
            refundId: "2691132",
            date: "Nov 22, 2023 09:31",
            csrId: "SMS",
            orderType: "MART",
            reason: "-",
            mode: "messageout"
        },
        {
            message: "Dear MedPlus Cstmr, you will receive a call from our doctor...",
            fullMessage: "Dear MedPlus Cstmr, you will receive a call from our doctor shortly.",
            commId: "23456722",
            orderId: "87346341",
            refundId: "",
            date: "Nov 22, 2024 09:31",
            csrId: "SMS",
            orderType: "MART",
            reason: "-",
            mode: "messageout"
        },
        {
            message: "MedPlus Custmr, order OKAMM2600591327 is created. Our ...",
            fullMessage: "MedPlus Custmr, order OKAMM2600591327 is created. Our agent will contact you.",
            commId: "56379720",
            orderId: "35837902",
            refundId: "",
            date: "Nov 21, 2025 17:13",
            csrId: "SMS",
            orderType: "MART",
            reason: "-",
            mode: "messageout"
        }
    ];

    return (
        <div className="container-fluid p-3">
            <div className="bg-white border rounded">
                <div className="p-3 border-bottom">
                    <h6 className="mb-0 fw-bold text-secondary">Communication Search Results</h6>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover mb-0 align-middle">
                        <thead className="bg-light">
                            <tr>
                                <th className="py-3 ps-3" style={{ width: '35%' }}>Message</th>
                                <th className="py-3 fw-bold">Communication ID</th>
                                <th className="py-3 fw-bold">Order ID</th>
                                <th className="py-3 fw-bold">Refund ID</th>
                                <th className="py-3 fw-bold">Date Created</th>
                                <th className="py-3 fw-bold">CSR ID</th>
                                <th className="py-3 fw-bold">Order Type</th>
                                <th className="py-3 fw-bold">Reason</th>
                                <th className="py-3 fw-bold">Mode Of Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="ps-3 position-relative">
                                        <span
                                            className="text-truncate d-inline-block"
                                            style={{ maxWidth: '400px', cursor: 'pointer' }}
                                            onMouseEnter={() => setHoveredMessage(index)}
                                            onMouseLeave={() => setHoveredMessage(null)}
                                        >
                                            {row.message}
                                        </span>
                                        {hoveredMessage === index && (
                                            <div className="custom-tooltip shadow-sm p-2 rounded border bg-light text-dark">
                                                <div className="fw-bold mb-1 text-secondary small">Message</div>
                                                <div className="small">{row.fullMessage}</div>
                                            </div>
                                        )}
                                    </td>
                                    <td className="fw-bold">{row.commId}</td>
                                    <td>
                                        {row.orderId && <Link to="/" className="text-decoration-none">{row.orderId}</Link>}
                                    </td>
                                    <td>
                                        {row.refundId && <Link to="/" className="text-decoration-none">{row.refundId}</Link>}
                                    </td>
                                    <td>{row.date}</td>
                                    <td>{row.csrId}</td>
                                    <td className="fw-bold">{row.orderType}</td>
                                    <td>{row.reason}</td>
                                    <td>{row.mode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CommunicationSearch;

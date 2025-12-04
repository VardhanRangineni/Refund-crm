import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaThLarge, FaBox, FaUsers, FaFilePrescription, FaUserMd,
    FaSync, FaUserCheck, FaWallet, FaChevronDown, FaSearch
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isDoctorsOpen, setIsDoctorsOpen] = useState(true);

    const toggleDoctors = () => {
        setIsDoctorsOpen(!isDoctorsOpen);
    };

    const closeDoctors = () => {
        setIsDoctorsOpen(false);
    };

    return (
        <div className="sidebar d-flex flex-column bg-white border-end" style={{ width: '250px', minHeight: '100vh' }}>
            <div className="p-3">
                <div className="input-group mb-3">
                    <span className="input-group-text bg-light border-end-0"><FaSearch className="text-muted" /></span>
                    <input type="text" className="form-control bg-light border-start-0" placeholder="Filter Menu" />
                </div>
            </div>

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark d-flex justify-content-between align-items-center">
                        <span><FaThLarge className="me-2 text-muted" /> Saved Workspace</span>
                        <FaChevronDown size={12} />
                    </a>
                </li>
                <li className="nav-item">
                    <Link
                        to="/"
                        className={`nav-link d-flex justify-content-between align-items-center ${isActive('/') ? 'active' : 'link-dark'}`}
                        onClick={closeDoctors}
                    >
                        <span><FaBox className="me-2 text-muted" /> Orders</span>
                        <FaChevronDown size={12} />
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark d-flex justify-content-between align-items-center">
                        <span><FaUsers className="me-2 text-muted" /> Customer</span>
                        <FaChevronDown size={12} />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark d-flex justify-content-between align-items-center">
                        <span><FaFilePrescription className="me-2 text-muted" /> Prescriptions</span>
                        <FaChevronDown size={12} />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link link-dark d-flex justify-content-between align-items-center"
                        onClick={(e) => { e.preventDefault(); toggleDoctors(); }}
                        aria-expanded={isDoctorsOpen}
                    >
                        <span><FaUserMd className="me-2 text-muted" /> Doctors</span>
                        <FaChevronDown size={12} style={{ transform: isDoctorsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                    </a>
                    {isDoctorsOpen && (
                        <ul className="list-unstyled fw-normal pb-1 small ms-4">
                            <li><a href="#" className="nav-link active-link fw-bold">E-Prescriptions</a></li>
                            <li><a href="#" className="nav-link link-secondary">Priority Order Config</a></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark">
                        <FaSync className="me-2 text-muted" /> Refill Requests
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark">
                        <FaUserCheck className="me-2 text-muted" /> Customer E-KYC
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/communication-search" className={`nav-link ${isActive('/communication-search') ? 'active' : 'link-dark'}`}>
                        <FaUsers className="me-2 text-muted" /> Communication Search
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark">
                        <FaWallet className="me-2 text-muted" /> M-Wallet Refund
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

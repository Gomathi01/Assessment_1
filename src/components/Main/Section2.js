import React from "react";
import './main.css';
import logo from '../Assets/logo1.jpg';
import logo2 from '../Assets/logo2.jpg';
import logo3 from '../Assets/logo3.jpg'; // Ensure this path is correct

function Section2() {
    return (
        <div className="card-container">
            <div className="card">
                <input type="text" className="search-btn" placeholder="Search"></input>
                <div className="card-header">
                    <div className="main-menu">
                        <div className="left-menu">
                            <h2>Employee</h2>
                        </div>
                        <div className="right-menu">
                            <button className="btn1">All</button>
                            <button className="btn2">Active</button>
                            <button className="btn3">Inactive</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card-content">
                            <img src={logo} alt="Company Logo" className="card-logo" />
                            <div className="card-text">
                                <h3>Johnson Wood</h3>
                                <p>Front End Developer</p>
                                <p>Email: johnsonwood@microsoft.com</p>
                                <button className="block-btn">Block</button>
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-content">
                            <img src={logo2} alt="Company Logo" className="card-logo" />
                            <div className="card-text">
                                <h3>John Doe</h3>
                                <p>Team Lead</p>
                                <p>Email: johndoe@microsoft.com</p>
                                <button className="block-btn">Block</button>
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card-content">
                        <img src={logo3} alt="Company Logo" className="card-logo" />
                        <div className="card-text">
                            <h3>Johnson Wood</h3>
                            <p>Front End Developer</p>
                            <p>Email: johnsonwood@microsoft.com</p>
                            <button className="block-btn">Block</button>
                            <button className="details-btn">Details</button>
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card-content">
                        <img src={logo2} alt="Company Logo" className="card-logo" />
                        <div className="card-text">
                            <h3>Johnson Wood</h3>
                            <p>Front End Developer</p>
                            <p>Email: johnsonwood@microsoft.com</p>
                            <button className="block-btn">Block</button>
                            <button className="details-btn">Details</button>
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card-content">
                        <img src={logo3} alt="Company Logo" className="card-logo" />
                        <div className="card-text">
                            <h3>Johnson Wood</h3>
                            <p>Front End Developer</p>
                            <p>Email: johnsonwood@microsoft.com</p>
                            <button className="block-btn">Block</button>
                            <button className="details-btn">Details</button>
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card-content">
                        <img src={logo} alt="Company Logo" className="card-logo" />
                        <div className="card-text">
                            <h3>Johnson Wood</h3>
                            <p>softwear Engineer</p>
                            <p>Email: johnsonwood@microsoft.com</p>
                            <button className="block-btn">Block</button>
                            <button className="details-btn">Details</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Section2;

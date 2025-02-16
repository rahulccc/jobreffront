import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [referrals, setReferrals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/referrals")
            .then((response) => response.json())
            .then((data) => setReferrals(data));
    }, []);

    return (
        <div className="app-container">
            <h1 className="title">🔥 Top Referral Jobs</h1>
            <div className="grid-container">
                {referrals.map((referral) => (
                    <div key={referral._id} className="card">
                        <div className="card-header">
                            <h2>{referral.jobTitle}</h2>
                            <span className="company">{referral.company}</span>
                        </div>
                        <p className="description">{referral.description}</p>

                        <div className="info">
                            <p><strong>💰 Earnings:</strong> {referral.earningPotential}</p>
                            <p><strong>🎁 Referral Bonus:</strong> {referral.referralBonus}</p>
                        </div>

                        {referral.benefits && referral.benefits.length > 0 && (
                            <ul className="benefits">
                                {referral.benefits.map((benefit, index) => (
                                    <li key={index}>✅ {benefit}</li>
                                ))}
                            </ul>
                        )}

                        <a href={referral.referralLink} target="_blank" rel="noopener noreferrer">
                            <button className="apply-button">🚀 Apply Now</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

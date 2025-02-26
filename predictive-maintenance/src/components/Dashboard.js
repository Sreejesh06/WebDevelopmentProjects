import React, { useState, useEffect } from "react";
import { machines } from "../data/machines";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faHeartPulse, faGauge, faThermometerHalf, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="last-updated">Last Updated: {currentTime}</div>
      <div className="total-machines">
        <h2>Total Machines</h2>
        <div className="total-number">{machines.length}</div>
      </div>

      {/* Data Cards */}
      <div className="data-cards">
        <div className="data-card">
          <FontAwesomeIcon icon={faGauge} className="icon blue-icon" />
          <div className="issue-count">{machines.filter(machine => machine.pressure > 1500).length}</div>
          <div className="data-label">Pressure</div>
        </div>
        <div className="data-card">
          <FontAwesomeIcon icon={faThermometerHalf} className="icon red-icon" />
          <div className="issue-count">{machines.filter(machine => machine.temperature > 300).length}</div>
          <div className="data-label">Temperature</div>
        </div>
        <div className="data-card">
          <FontAwesomeIcon icon={faWind} className="icon purple-icon" />
          <div className="issue-count">{machines.filter(machine => machine.vibration > 7).length}</div>
          <div className="data-label">Vibration</div>
        </div>
        <div className="data-card">
          <FontAwesomeIcon icon={faWind} className="icon green-icon" />
          <div className="issue-count">{machines.filter(machine => machine.gasFlow > 3).length}</div>
          <div className="data-label">Gas Flow</div>
        </div>
      </div>

      {/* Machine Grid */}
      <div className="machine-grid">
        {machines.map((machine, index) => (
          <div
            key={machine.name}
            className={`machine-card ${
              machine.RUL < 50 ? "error" : "good"
            }`}
          >
            <div className="machine-name">{`MACHINE NAME ${index + 1}`}</div>
            <div className="machine-data">
              <div className="data-item">
                <FontAwesomeIcon icon={faGauge} className="icon blue-icon" />
                <span className={machine.pressure > 1500 ? "critical" : ""}>{machine.pressure} psi</span>
                <div className="data-label">Pressure</div>
              </div>
              <div className="data-item">
                <FontAwesomeIcon icon={faThermometerHalf} className="icon yellow-icon" />
                <span className={machine.temperature > 300 ? "critical" : ""}>{machine.temperature} °C</span>
                <div className="data-label">Temperature</div>
              </div>
              <div className="data-item">
                <FontAwesomeIcon icon={faWind} className="icon purple-icon" />
                <span className={machine.vibration > 7 ? "critical" : ""}>{machine.vibration} Hz</span>
                <div className="data-label">Vibration</div>
              </div>
              <div className="data-item">
                <FontAwesomeIcon icon={faWind} className="icon green-icon" />
                <span className={machine.gasFlow > 3 ? "critical" : ""}>{machine.gasFlow} kg/s</span>
                <div className="data-label">Gas Flow</div>
              </div>
            </div>
            <div className={`rul ${machine.RUL < 50 ? "blink" : ""}`}>
              <FontAwesomeIcon icon={faHeartPulse} className="icon orange-icon" />
              <span>RUL: {machine.RUL} days</span>
              {machine.RUL < 50 && <FontAwesomeIcon icon={faExclamationCircle} className="alert-icon" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import './Dashboard.css';
import { FiBell, FiPlus } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import Sidebar from '../sidebar/sidebar';
import { MdNotifications } from "react-icons/md";


const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar"><Sidebar /></div>

      <main className="main">
        {/* Header */}
        <header className="header">
  <div className="search-bar-with-bell">
    <input type="text" placeholder="Search" className="search-input" />
    <div className="bell-icon">
    <FiBell size={20} />
    <MdNotifications size={20} className="text-blue-500" />
    </div>
  </div>
  <div className="header-actions">
    <FiPlus size={20} />
    <img src="/assets/user.png" alt="User" className="avatar" />
  </div>
</header>


        <div className="dashboard-main">
          {/* Left Overview Section */}
          <div className="overview-section">
            <div className="anatomy-cards-wrapper">
              {/* Anatomy image with indicators */}
              <div className="anatomy" style={{ position: 'relative' }}>
                <img src="/assets/Anotomy.png" alt="Human Body" className="body-img" />
                <div
                  className="indicator heart"
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '65%',
                    transform: 'translate(-10%, -10%)',
                    backgroundColor: 'blue',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                ❤️ Healthy Heart
                </div>
                <div
                  className="indicator leg"
                  style={{
                    position: 'absolute',
                    top: '60%',
                    left: '28%',
                    transform: 'translate(-30%, -50%)',
                    backgroundColor: '#98FBCB',
                    borderRadius: '4px',
                    
                  }}
                >
                  🦵 Healthy Leg
                </div>
              </div>

              <div className="health-cards-column">
  {/* Lungs */}
  <div className="card health-status-card">
    <div className="icon-name">
      <img src="/assets/Lungs (2).png" alt="Lungs" className="health-icon" />
      <p className="health-name"><b>Lungs</b></p>
    </div>
    <p className="health-date">Date: 26th Oct-2021</p>
    <div className="bar-track">
      <div className="bar-fill red"></div>
    </div>
  </div>

  {/* Teeth */}
  <div className="card health-status-card">
    <div className="icon-name">
      <img src="/assets/Tooth (2).png" alt="Teeth" className="health-icon" />
      <p className="health-name"><b>Teeth</b></p>
    </div>
    <p className="health-date">Date: 26th Oct-2021</p>
    <div className="bar-track">
      <div className="bar-fill green"></div>
    </div>
  </div>

  {/* Bone */}
  <div className="card health-status-card">
    <div className="icon-name">
      <img src="/assets/Human Bone.png" alt="Bone" className="health-icon" />
      <p className="health-name"><b>Bone</b></p>
    </div>
    <p className="health-date">Date: 26th Oct-2021</p>
    <div className="bar-track">
      <div className="bar-fill red"></div>
    </div>
  </div>
</div>
</div>

            {/* Activity chart */}
            <div className="activity">
              <div className="activity-header">
                <h4>Activity</h4>
                <p>3 appointment on this week</p>
              </div>

              <div className="activity-chart">
  {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
    <div key={day} className="activity-day">
      <div className="bar-group">
  {Array.from({ length: 3 }).map((_, i) => (
    <div
      key={i}
      className={`bar-segment ${i === 0 ? 'gray' : i === 1 ? 'sky' : 'purple'}`}
      style={{ height: `${Math.floor(Math.random() * 80 + 20)}px` }}
    />
  ))}
</div>

      <span className="day-label">{day}</span>
    </div>
  ))}
</div>
</div>
 </div>






          {/* Right Calendar Section */}
          <div className="calendar-section">
  <div className="calendar-header">
    
    <h3>October 2021</h3>
    <button className="nav-btn"><img src='/assets/Left.png' width={20} height={20}></img><img src='/assets/Right.png' width={20} height={20}></img></button>
  
  </div>

  <div className="calendar-grid">
    {[
      { day: 'Mon', date: 25, times: ['10:00','11:00', '12:00'] },
      { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'] },
      { day: 'Wed', date: 27, times: ['12:00', '__','13:00'] },
      { day: 'Thurs', date: 28, times: ['10:00', '11:00','__'] },
      { day: 'Fri', date: 29, times: ['__','14:00', '16:00'] },
      { day: 'Sat', date: 30, times: ['13:00', '14:00','15:00'] },
      { day: 'Sun', date: 31, times: ['09:00', '10:00','11:00'] },
    ].map(({ day, date, times }, idx) => (
      <div key={idx} className="calendar-day">
        <div className="calendar-day-header">
  <span className="calendar-day-name">{day}</span>
  <span className="calendar-day-date">{date}</span>
</div>

        <div className="calendar-times">
          {times.map((time, i) => (
            <div
              key={i}
              className={`calendar-time ${time === '09:00' || time === '11:00' ? 'active' : ''}`}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>







            <div className="appointments">
  {/* Dentist - smaller box */}
  <div className="appointment-card">
    <div className="appointment-header">
      <strong>Dentist</strong>
      <img src="/assets/Tooth (2).png" alt="Tooth" className="appointment-icon" />
    </div>
    <p className="appointment-time">09:00 - 11:00</p>
    <p className="appointment-doctor">Dr. Cameron Williamson</p>
  </div>

  {/* Physiotherapy - larger box */}
  <div className="appointment-card tall">
    <div className="appointment-header">
      <strong>Physiotherapy</strong>
      <img src="/assets/Biceps.png" alt="Physio" className="appointment-icon" />
    </div>
    <p className="appointment-time">11:00 - 12:00</p>
    <p className="appointment-doctor">Dr. Kevin Djones</p>
  </div>
</div>






<div className="upcoming-schedule">
  {/* Thursday */}
  <div className="day-schedule"><p>The Upcoming Schedule</p>
    <p className="schedule-day-label">On Thursday</p>
    <div className="schedule-items">
      <div className="schedule-pill pill-wide">
        <div className="pill-header">
          <span>Health checkup complete</span>
          <span>💉</span>
        </div>
        <div className="pill-time">11:00 AM</div>
      </div>
      <div className="schedule-pill pill-narrow">
        <div className="pill-header">
          <span>Ophthalmologist</span>
          <span>👁️</span>
        </div>
        <div className="pill-time">14:00 PM</div>
      </div>
    </div>
  </div>

  {/* Saturday */}
  <div className="day-schedule">
    <p className="schedule-day-label">On Saturday</p>
    <div className="schedule-items">
      <div className="schedule-pill pill-narrow">
        <div className="pill-header">
          <span>Cardiologist</span>
          <span>❤️</span>
        </div>
        <div className="pill-time">12:00 AM</div>
      </div>
      <div className="schedule-pill pill-narrow">
        <div className="pill-header">
          <span>Neurologist</span>
          <span><img src='/assets/Doctor.png' alt='Neurologist' height={18} width={18}></img></span>
        </div>
        <div className="pill-time">16:00 PM</div>
      </div>
      </div>
    </div>
  </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

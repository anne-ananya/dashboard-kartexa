import React from 'react';

const Menu = ({ handleMenuItemClick }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '80px',
        left: '10px',
        width: '200px',
        background: '#E3EDF7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '12px',
        padding: '10px',
        zIndex: 1,
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <img
          src="images/Frame 1000003850.png"
          alt="Company Logo"
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (11).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Check in out master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\Combined-Shape1.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Dashboard
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\icons8-male-user-24.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            My Profile
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (2).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Calendar
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (3).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Meeting Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="images\icons8-task-completed-50.png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            My Task
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (9).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Leave Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (6).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Notification Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (8).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Learning Center
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (9).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Policy Master
          </a>
        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <img
            src="./images/vector (10).png"
            alt="Option Icon"
            style={{ width: '15px', marginRight: '10px' }}
          />
          <a
            href="/"
            style={{ color: 'black', textDecoration: 'none', fontFamily: 'Poppins' }}
            onMouseOver={(e) => (e.target.style.color = '#003d6b')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Badges
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

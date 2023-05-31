import React, { useState } from "react";

const Notification = () => {
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [expandedNotification, setExpandedNotification] = useState(null);

  const toggleShowAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  const expandNotification = (index) => {
    setExpandedNotification(index);
  };

  const notifications = [
    {
      id: 1,
      text: "We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].",
      courseDetails: "Course 1 details: [Course Name], [Course Description], [Course Duration], [Course Instructor], etc.",
    },
    {
      id: 2,
      text: "We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].",
      courseDetails: "Course 2 details: [Course Name], [Course Description], [Course Duration], [Course Instructor], etc.",
    },
    {
      id: 3,
      text: "We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].",
      courseDetails: "Course 3 details: [Course Name], [Course Description], [Course Duration], [Course Instructor], etc.",
    },
    {
      id: 4,
      text: "We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome]We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].",
      courseDetails: "Course 4 details: [Course Name], [Course Description], [Course Duration], [Course Instructor], etc.",
    },
    // Add more notifications here if needed
  ];

  const displayedNotifications = showAllNotifications ? notifications : notifications.slice(0, 2);

  return (
    <div
      style={{
        position: "absolute",
        top: "560px",
        left: "150px", // Adjusted left position
        width: "1230px",
        height: "550px",
        borderRadius: "20px",
        border: "3px solid #000000",
        background: "rgba(255, 255, 255, 0.8)",
        zIndex: "1",
      }}
    >
      {/* Notification */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "20px",
          color: "#000000",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h3 style={{ margin: 0 }}>Notifications</h3>
          {notifications.length > 2 && (
            <button
              onClick={toggleShowAllNotifications}
              style={{
                border: "none",
                background: "none",
                color: "#0478FF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {showAllNotifications ? "View Less" : "View More"}
            </button>
          )}
        </div>
        <hr
          style={{
            marginTop: "10px",
            width: "100%",
            border: "none",
            borderTop: "2px solid rgba(0, 0, 0, 0.4)",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          {displayedNotifications.map((notification, index) => (
            <div key={notification.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img
                src="images/Ellipse 219.png"
                alt="Bullet"
                style={{
                  width: "23px",
                  height: "23px",
                  marginRight: "10px",
                }}
              />
              <p style={{ margin: 0, color: "#000000" }}>
                {notification.text}{" "}
                {expandedNotification === notification.id && (
                  <span style={{ color: "#000000" }}>{notification.courseDetails}</span>
                )}
                {expandedNotification !== notification.id && (
                  <span
                    style={{ color: "#0478FF", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => expandNotification(notification.id)}
                  >
                    View details
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;

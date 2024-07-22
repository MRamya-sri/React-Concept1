import React from 'react';

const userInfo = [
    {
        username: "Ramya",
        email: "r@gmail.com",
        location: "India",
    },
    {
        username: "Taylor",
        email: "T@gmail.com",
        location: "US",
    },
    {
        username: "Lana",
        email: "L@gmail.com",
        location: "UK",
    },
];

const Lists = () => {
  return (
    <>
      <h1> Lists using map() functions </h1>
      {
        userInfo.map((user, index) => {
          return (
            <ul key={index}> {/* random key to avoid error that doesn't have anything to do with code */}
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.location}</li>
            </ul>
          );
        })
      }
    </>
  );
};

export default Lists;

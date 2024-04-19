"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import UserChart from "../profile/UserChart";
import Image from "next/image";
import Grade from "../profile/Grade";
import axios from "axios";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}

const Profile: NextPage<{ employee: Employee }> = ({ employee }) => {
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/register");
        console.log("response:-", response);
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching user profile.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []); 
  

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!userProfile) {
    return <div className="no-profile">No user profile found.</div>;
  }

  return (
    
    <div className="chat_info">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <div className="profile">
                  <h1>Employee Profile</h1>
                  <div className="profile_ddt">
                    <h2>{userProfile?.fullName}</h2>
                    <div className="profile_img">
                      <Image
                        src="/ai-image.webp"
                        width={500}
                        height={500}
                        alt="Picture of the employee"
                      />
                    </div>
                    <p>Full Name: {userProfile?.fullName}</p>
                    <p>Email: {userProfile?.email}</p>
                    <p>Department: {}</p>
                    <p>Designation: {}</p>
                    <p>DOB: {}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="rating">
                  <Grade />

                  <textarea
                    value=""
                    placeholder="Add a comment..."
                    rows={4}
                    cols={50}
                    className="form-control"
                  ></textarea>
                  <button type="button" className="btn btn-primary">
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1>Performance Chart</h1>
                <UserChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.getInitialProps = async () => {
  // Fetch employee data from an API or database
  const employee: Employee = {
    id: 123,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "john.doe@example.com",
  };

  return { employee };
};

export default Profile;

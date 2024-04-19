"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/app/ui/dashboard/Breadcrumb/Breadcrumb";
import { Container } from "react-bootstrap";

interface UserProfile {
  name: string;
  email: string;
  phoneNumber: string;
  designation:string;
}

const Users: React.FC = () => {
  //const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/register");
       
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching user profile.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []); 

  const handleClick = () => {
    router.push("/addUsers");
  };

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
    <div>
      <div className="container-fluid px-4 mh-3 d-flex header align-items-center mb-5 border-bottom justify-content-between">
        <Breadcrumb title="Users" />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Add user
        </button>
      </div>

      <Container fluid>
        <h1>User Profiles</h1>
        <div className="row">
          {userProfile.map((profile: any, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3">
                <div className="card_img">
                  <img className="card-img-top" src="https://coreui.io/demos/next-js/2.0/default/_next/static/media/react.34f8281a.jpg"/>
                  <img src="https://coreui.io/demos/next-js/2.0/default/_next/static/media/1.ddb21a14.jpg" alt="" className="img-fluid usr_img" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Profile #{index + 1}</h5>
                  <p>
                    <strong>Name:</strong> {profile?.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {profile?.email}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {profile?.phoneNumber}
                  </p>
                  <p>
                    <strong>Designation:</strong> {profile?.designation}
                  </p>
                  <Link className="btn btn-primary" href="/profile">
                    View Profile
                  </Link>
                  <Link className="btn btn-primary" href="/give-rating">
                   Give Rating
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Users;

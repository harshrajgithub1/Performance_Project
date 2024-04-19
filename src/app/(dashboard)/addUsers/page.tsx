"use client";
import React, { useState } from "react";
import axios from "axios";
import Breadcrumb from "@/app/ui/dashboard/Breadcrumb/Breadcrumb";

interface NewUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  designation: string;
  image?: File | null;
}

const AddUser: React.FC = () => {
  const [formData, setFormData] = useState<NewUser>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    designation: "",
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const userData = new FormData();
      // console.log("userData:-", userData)
      // userData.append('name', formData.name);
      // userData.append('email', formData.email);
      // userData.append('phoneNumber', formData.phoneNumber);
      // if (formData) {
      //   userData.append('image', formData.image);
      // }

      const formData = new FormData(e.target as HTMLFormElement);
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const phoneNumber = formData.get("phoneNumber") as string;
      const password = formData.get("password") as string;
      const designation = formData.get("designation") as string;
      const image = formData.get("image") as string;

      let obj = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        designation: designation,
        isActive: true,
        image:image
      };
console.log("obj:-", obj);
      const response = await axios.post("api/register", JSON.stringify(obj), {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("User added successfully:", response.data);
      // Reset form data after successful submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        designation: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="container-fluid px-4 mh-3 d-flex header align-items-center mb-5 border-bottom justify-content-between">
        <Breadcrumb title="New User" parents="users" />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>
                  <strong>Add </strong>
                  <small>New User</small>
                </h4>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label className="form-label">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="fullName"
                        value={formData?.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email:</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone Number:</label>
                      <input
                        className="form-control"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Password:</label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Designation:</label>
                      <input
                        className="form-control"
                        type="text"
                        name="designation"
                        value={formData?.designation}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                      <label className="form-label">Image:</label>
                      <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </div> 
                  {/* <label>
          Image:
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </label> */}
                  <button type="submit" className="btn btn-primary mt-3">
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

"use client";
import React, { useState } from "react";
import axios from "axios";

const GiveRating: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    moduleName: "",
    employeeRating: "",
    comments: "",
    employeeId: "",
    teamId: "",
    createdBy: "",
  });


  const handleSubmitRating = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/employeeRating", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response:-", response);
      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }
      alert("Rating submitted successfully");
      
      setFormData({
        id: "",
        moduleName: "",
        employeeRating: "",
        comments: "",
        employeeId: "",
        teamId: "",
        createdBy: "",
      });
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to submit rating. Please try again.");
    }
  };


  return (
    <div className="employee">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="employee_perfomance">
              <h2 className="text-center">Employee Performance Review</h2>

              <h3>Employee Information</h3>

              <div className="row">
                <div className="col-md-6">
                  <ul className="employee_list">
                    <li>
                      Employee Name: <span></span>
                    </li>
                    <li>
                      Job Title: <span></span>
                    </li>
                    <li>
                      Department: <span></span>
                    </li>
                    <li>
                      Review period: <span></span>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="employee_list">
                    <li>
                      Employee ID: <span></span>
                    </li>
                    <li>
                      Date: <span></span>
                    </li>
                    <li>
                      Manager: <span></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="employee_rating">
                <h3>Ratings</h3>

                <div className="employee_table">
                  <div className="tips">
                    <div className="title"></div>
                    <ul className="tips_ul">
                      <li>
                        <p>
                          <small>1 = Poor</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <small>2 = Fair</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <small>3 = Satisfactory</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <small>4 = Good</small>
                        </p>
                      </li>
                      <li>
                        <p>
                          <small>5 = Excellent</small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Job Knowledge</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>

                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Work Quality</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>

                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Attendance/Punctuality</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>

                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Productivity</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>


                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Communication/Listening Skills</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>

                  <div className="employee_table_dtl">
                    <div className="employee_title">
                      <p>
                        <strong>Dependability</strong>
                      </p>
                      <p>
                        <em>Comments</em>
                      </p>
                    </div>
                    <div className="employee_rate_check">
                      <ul>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                        <li>
                          <input type="checkbox" className="checkbox" />
                        </li>
                      </ul>
                      <textarea name="" id="" placeholder="Add Comment...."></textarea>
                    </div>
                  </div>

                  <div className="button-sec text-end mt-4">
                    <button className="btn btn-custom" onClick={handleSubmitRating}>Submit Rating</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveRating;

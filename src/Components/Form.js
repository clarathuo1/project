import React, { useState } from "react";
import "../App.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [review, setReview] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleReviewChange(event) {
    setReview(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { firstName, lastName, review };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setReview("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div className='submission-item' key={index}>
        <strong>{data.firstName} {data.lastName}</strong>
        <p>{data.review}</p>
      </div>
    );
  });

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='feedback-form'>
        <input
          type='text'
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder='First Name'
          className='form-input'
        />
        <input
          type='text'
          onChange={handleLastNameChange}
          value={lastName}
          placeholder='Last Name'
          className='form-input'
        />
        <textarea
          onChange={handleReviewChange}
          value={review}
          placeholder='Your Review'
          className='form-textarea'
        />
        <button type='submit' className='form-button'>Submit</button>
      </form>
      <h3 className='submissions-heading'>Submissions</h3>
      <div className='submissions-container'>
        {listOfSubmissions}
      </div>
    </div>
  );
}

export default Form;

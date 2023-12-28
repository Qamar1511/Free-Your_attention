import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert("Feedback submitted")
  };

  return (
    <div className="feedback-form">
    <h4>This feature in this website Frustate me:</h4>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

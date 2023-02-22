import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./Card";
import Button from "./Button";

function FeedbackForm({ handleAdd }) {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  function handleTextChange(e) {
    const newText = e.target.value;
    setText(newText);

    if (newText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText !== "" && newText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Review must be at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback = { id: uuidv4(), rating, text };
      handleAdd(newFeedback);

      setText("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selectRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;

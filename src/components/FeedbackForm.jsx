import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "./FeedbackContext";
import RatingSelect from "./RatingSelect";
import Card from "./Card";
import Button from "./Button";

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const { feedbackInEdit, updateFeedback, addFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackInEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackInEdit.item.text);
      setRating(feedbackInEdit.item.rating);
    }
  }, [feedbackInEdit]);

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
      if (feedbackInEdit.edit === true) {
        const editedFeedback = { id: feedbackInEdit.item.id, rating, text };
        updateFeedback(editedFeedback);
      } else {
        const newFeedback = { id: uuidv4(), rating, text };
        addFeedback(newFeedback);
      }

      setRating(10);
      setText("");
      setBtnDisabled(true);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
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

import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import FeedbackContext from "../contexts/FeedbackContext";
import SetRatings from "./SetRatings";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, upDateEdit } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setDisabled(false);
      setMessage(null);
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === "") {
      setMessage(null);
      setDisabled(true);
    } else if (text.trim().length < 10) {
      setMessage("Must be at least 10 characters");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit === true){
        upDateEdit(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback);
      }
    }

    setText("");
    setDisabled(true);
    setRating(10);
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleSubmit}>
        <SetRatings select={setRating} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Write a review"
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

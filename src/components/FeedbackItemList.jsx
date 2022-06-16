import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../contexts/FeedbackContext";
import { useContext } from "react";

function FeedbackItemList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackItemList;

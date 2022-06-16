import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../contexts/FeedbackContext";
import { useContext } from "react";
import Spinner from "./Spinner";

function FeedbackItemList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedbacks Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackItemList;

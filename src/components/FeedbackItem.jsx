import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../contexts/FeedbackContext";
import { useContext } from "react";

function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  const handleDelete = () =>{
    deleteFeedback(item.id)
  }

  const handleEdit = () =>{
    editFeedback(item)
  }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="edit" onClick={handleEdit}>
        <FaEdit color="purple"></FaEdit>
      </button>
      <button className="close" onClick={handleDelete}>
        <FaTimes color="purple"></FaTimes>
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

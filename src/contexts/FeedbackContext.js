import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) =>{
    if(window.confirm('Aru you sure')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const upDateEdit = (id, updItem) =>{
    updItem.id = uuidv4()
    setFeedback(feedback.map((item) => (item.id === id ? updItem : item)))
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        upDateEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
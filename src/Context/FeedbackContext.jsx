import React from "react";
import { createContext, useState, useEffect } from "react";
//import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/reviews?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

  const AddFeedback = async (newFeedback) => {
    const response = await fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    //   newFeedback.id = uuidv4()
    const data = await response.json(newFeedback);
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are You Sure You Want to Delete? ")) {
      await fetch(`/reviews/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  // let item be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // feedbackEdit is the state, editfeedback is the function

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        AddFeedback,
        editFeedback,
        feedbackEdit,
        isLoading,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

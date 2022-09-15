import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext= createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
        id: 1, 
        text: 'Feedback item 1',
        rating: 10
        },
        {
            id: 2, 
            text: 'Feedback item 2',
            rating: 10 
        },
        {
            id: 3, 
            text: 'Feedback item 3',
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    const AddFeedback =(newFeedback)=> {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedback =(id)=>{
        if(window.confirm('Are You Sure You Want to Delete? ')) {
          setFeedback(feedback.filter((item)=> item.id !== id))
        }
      }

//update feedback
const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> 
        item.id ===id ? { ...item, ...updItem } : item
    ))
}
// let item be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item, 
            edit :true
        })

    }

  // feedbackEdit is the state, editfeedback is the function
    

    return<FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        AddFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
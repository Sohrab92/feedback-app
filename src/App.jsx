import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FeedbackContext from "./components/FeedbackContext";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import AboutIcon from "./components/AboutIcon";
import About from "./components/About";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackInEdit, setFeedbackInEdit] = useState({
    item: {},
    edit: false,
  });

  function addFeedback(newFeedback) {
    setFeedbacks([newFeedback, ...feedbacks]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete this feedback?"))
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
  }

  function editFeedback(item) {
    setFeedbackInEdit({ item, edit: true });
  }

  function updateFeedback(editedItem) {
    setFeedbacks(
      feedbacks.map((item) => {
        return item.id === editedItem.id ? editedItem : item;
      })
    );
    setFeedbackInEdit({ item: {}, edit: false });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackInEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutIcon />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <div className="container">
                <About />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </FeedbackContext.Provider>
  );
}

export default App;

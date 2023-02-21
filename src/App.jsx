import { useState } from "react";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete this feedback?"))
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks) {
    return <p>No feedback yet!</p>;
  }

  const feedbackItems = feedbacks.map((item) => (
    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  ));

  return <div className="feedback-list">{feedbackItems}</div>;
}

export default FeedbackList;

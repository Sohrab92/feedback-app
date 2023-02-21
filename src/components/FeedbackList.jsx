import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks }) {
  if (!feedbacks) {
    return <p>No feedback yet!</p>;
  }

  const feedbackItems = feedbacks.map((item) => (
    <FeedbackItem key={item.id} item={item} />
  ));

  return <div className="feedback-list">{feedbackItems}</div>;
}

export default FeedbackList;

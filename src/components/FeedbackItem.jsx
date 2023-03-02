import { useContext } from "react";
import FeedbackContext from "./FeedbackContext";
import Card from "./Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <i className="fa-solid fa-times"></i>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <i className="fa-solid fa-edit"></i>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

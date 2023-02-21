import Card from "./Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <i className="fa-solid fa-times"></i>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

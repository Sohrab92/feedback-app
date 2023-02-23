import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "./FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks) {
    return <p>No feedback yet!</p>;
  }

  const feedbackItems = feedbacks.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <FeedbackItem item={item} />
    </motion.div>
  ));

  return (
    <div className="feedback-list">
      <AnimatePresence>{feedbackItems}</AnimatePresence>
    </div>
  );
}

export default FeedbackList;

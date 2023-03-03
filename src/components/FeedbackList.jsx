import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

function FeedbackList() {
  const { isLoading, feedbacks } = useContext(FeedbackContext);

  if (!isLoading && !feedbacks) {
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

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>{feedbackItems}</AnimatePresence>
    </div>
  );
}

export default FeedbackList;

import Message from "./Message";
import Reset from "./Reset";
import StarRating from "./StarRating";
import Title from "./Title";

const Modal = () => (
  <div className="relative flex w-1/3 flex-col items-center gap-4 rounded bg-white p-6">
    <Reset />
    <Title content="How many stars would you give to them?" />
    <Message
      content="Jonah Noah delivered your order from Nanica Homemade Pies, today at 19:47 (7 min ahead schedule)."
      highlight={["Nanica", "Homemade", "Pies,"]}
    />
    <StarRating />
  </div>
);

export default Modal;

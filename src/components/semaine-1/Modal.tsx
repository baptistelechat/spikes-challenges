import Message from "./Message";
import Reset from "./Reset";
import StarRating from "./StarRating";
import Title from "./Title";

const Modal = () => {
  return (
    <div className="relative w-1/3 p-6 flex flex-col items-center gap-4 bg-white rounded">
      <Reset/>
      <Title content="How many stars would you give to them?" />
      <Message
        content="Jonah Noah delivered your order from Nanica Homemade Pies, today at 19:47 (7 min ahead schedule)."
        highlight={["Nanica", "Homemade", "Pies,"]}
      />
      <StarRating/>
    </div>
  );
};

export default Modal;

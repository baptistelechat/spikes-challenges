import Message from "./Message";
import Reset from "./Reset";
import StarRating from "./StarRating";
import Title from "./Title";

const Modal = () => (
  <div className="relative flex w-1/4 flex-col items-center gap-4 rounded-lg bg-white p-6">
    <Reset />
    <Title content="Quel note donnerais-tu à ce challenges ?" />
    <Message
      content="Bon j'espère que tu vas mettre 5 évidemment, si ce n'est pas le cas viens me dire pourquoi !"
    />
    <StarRating />
  </div>
);

export default Modal;

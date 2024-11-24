interface IMessageProps {
  content: string;
  highlight?: string[];
}

const Message = (props: IMessageProps) => {
  const { content, highlight } = props;

  // Fonction pour mettre en valeur les mots spécifiés
  const renderHighlightedText = () => {
    if (!highlight || highlight.length === 0) {
      return content; // Pas de mots à mettre en valeur
    }

    // Split du contenu en mots
    const words = content.split(" ");

    return words.map((word) => (
      <span key={word} className={highlight.includes(word) ? "font-bold" : ""}>
        {word}{" "}
      </span>
    ));
  };

  return <p className="text-center">{renderHighlightedText()}</p>;
};

export default Message;

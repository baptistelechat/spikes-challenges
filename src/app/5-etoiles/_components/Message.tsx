interface IMessageProps {
  content: string;
  highlight?: string[];
}

const Message = (props: IMessageProps) => {
  const { content, highlight } = props;

  const renderHighlightedText = () => {
    if (!highlight || highlight.length === 0) {
      return content;
    }

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

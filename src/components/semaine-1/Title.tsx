interface ITitleProps {
  content: string;
}

const Title = (props: ITitleProps) => {
  return <h1 className="text-2xl text-center font-semibold">{props.content}</h1>;
};

export default Title;

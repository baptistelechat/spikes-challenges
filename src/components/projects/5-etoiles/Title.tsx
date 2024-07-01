interface ITitleProps {
  content: string;
}

const Title = (props: ITitleProps) => (
  <h1 className="text-center text-2xl font-semibold">{props.content}</h1>
);

export default Title;

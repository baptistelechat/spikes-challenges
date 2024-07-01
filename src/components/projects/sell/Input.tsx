interface IInput {
  placeholder: string;
  action: string;
  extraStyle?: string;
}

const Input = ({ placeholder, action, extraStyle }: IInput) => {
  return (
    <div className={`${extraStyle} flex w-full items-center space-x-2`}>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 rounded-lg border bg-neutral-100 p-4 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
      />
      <button className="rounded-lg bg-blue-600 px-5 py-4 text-white hover:bg-blue-700">
        {action}
      </button>
    </div>
  );
};

export default Input;

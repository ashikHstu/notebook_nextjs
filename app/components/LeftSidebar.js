
const LeftSidebar = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen">
      <ul className="space-y-4">
        {options.map((option) => (
          <li
            key={option}
            className={`p-2 cursor-pointer ${
              selectedOption === option ? 'bg-blue-500 text-white' : 'bg-white text-black'
            } rounded-md`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;

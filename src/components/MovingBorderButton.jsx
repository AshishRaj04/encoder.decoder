const MovingBorderButton = ({ text, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };
  const buttonWrapperStyle = {
    position: "relative",
    display: "inline-block",
  };

  return (
    <div style={buttonWrapperStyle}>
      <button
        onClick={handleClick}
        className="relative mt-4 px-6 py-3 bg-gray-600 text-orange-500 font-semibold rounded-md shadow-md focus:outline-none"
      >
        {text}
      </button>
    </div>
  );
};
export default MovingBorderButton;

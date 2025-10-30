/* eslint-disable react/prop-types */
const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-sm font-medium transition-colors relative
        ${active 
          ? 'text-[#DF951F] border-b-2 border-[#DF951F]' 
          : 'text-gray-500 hover:text-gray-700'
        }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
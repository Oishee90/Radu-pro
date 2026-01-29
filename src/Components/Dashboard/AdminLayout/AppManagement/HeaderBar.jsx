import { FiEdit } from "react-icons/fi";

export default function HeaderBar({ isEdit, setIsEdit }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <h2 className="text-sm font-semibold text-green-700">
        View IFT / PQ / REOI / RFP / PSN Notice Details
      </h2>

      <button
        onClick={() => setIsEdit(!isEdit)}
        className="p-2 rounded hover:bg-gray-100"
      >
        <FiEdit className="text-gray-600" />
      </button>
    </div>
  );
}

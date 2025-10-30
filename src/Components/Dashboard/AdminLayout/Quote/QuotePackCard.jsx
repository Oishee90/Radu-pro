import { Edit2, Trash2 } from "lucide-react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function QuotePackCard({ pack }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this quote pack?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DF951F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDeleted(true); // remove the card from UI
        Swal.fire("Deleted!", "Your quote pack has been deleted.", "success");
      }
    });
  };

  if (isDeleted) return null; // hide the card if deleted
  return (
    <div className="transition-shadow bg-white border border-gray-100 shadow-xl rounded-xl hover:shadow-md outfit">
      {/* Image Container */}
      <div className="relative overflow-hidden ">
        <img
          src={pack.image || "/placeholder.svg"}
          alt={pack.title}
          className="object-cover object-center w-full h-full rounded-t-xl"
        />

        {/* Badge */}
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-0.5 rounded-full text-sm font-medium outfit ${
              pack.type === "premium"
                ? "bg-[#DBEAFE] text-[#DF951F]"
                : "bg-[#DBEAFE] text-blue-700"
            }`}
          >
            {pack.type === "premium" ? "Premium" : "Free"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="mb-1 text-[24px] font-semibold text-[#1F2937] line-clamp-2">
            {pack.title}
          </h3>

          {/* Action Icons */}
          <div className="">
            <button className="p-1.5 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm">
              <Link to="/edit-pack">
                <FiEdit size={18} className="text-[#DF951F] font-bold" />
              </Link>
            </button>
            <button
              onClick={handleDelete}
              className="p-1.5 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              <MdDeleteOutline size={23} className="font-bold text-red-500" />
            </button>
          </div>
        </div>

        <p className="mb-2 text-sm text-gray-600 line-clamp-2">
          {pack.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="font-medium">{pack.quotes}</span>
            <span>quotes</span>
          </div>
          <div className="flex items-center gap-1">
            <FiDownload />
            <span className="font-medium">{pack.views}</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span>
            Category: <span className="font-medium">{pack.category}</span>
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {pack.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

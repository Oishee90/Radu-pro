import { useState } from "react";
import { Plus } from "lucide-react";
import image1 from "../../../../assets/image-q1.png";
import image2 from "../../../../assets/image-q2.png";
import image3 from "../../../../assets/image-q3.png";
import image4 from "../../../../assets/image-q4.png";

import QuotePackCard from "./QuotePackCard";
import { Link } from "react-router-dom";

const mockPacks = [
  {
    id: 1,
    title: "Motivational Quotes Vol. 1",
    description:
      "A collection of powerful motivational quotes to inspire success.",
    image: image1,
    quotes: 50,
    views: 1250,
    category: "Motivation",
    tags: ["success", "inspiration", "goals"],
    type: "premium",
  },
  {
    id: 2,
    title: "Motivational Quotes Vol. 1",
    description:
      "A collection of powerful motivational quotes to inspire success.",
    image: image2,
    quotes: 50,
    views: 1250,
    category: "Motivation",
    tags: ["success", "inspiration", "goals"],
    type: "premium",
  },
  {
    id: 3,
    title: "Motivational Quotes Vol. 1",
    description:
      "A collection of powerful motivational quotes to inspire success.",
    image: image3,
    quotes: 50,
    views: 1250,
    category: "Motivation",
    tags: ["success", "inspiration", "goals"],
    type: "premium",
  },
  {
    id: 4,
    title: "Motivational Quotes Vol. 1",
    description:
      "A collection of powerful motivational quotes to inspire success.",
    image: image4,
    quotes: 50,
    views: 1250,
    category: "Motivation",
    tags: ["success", "inspiration", "goals"],
    type: "free",
  },
];

const QuotePack = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPacks = mockPacks.filter((pack) => {
    if (activeTab === "all") return true;
    if (activeTab === "premium") return pack.type === "premium";
    if (activeTab === "free") return pack.type === "free";
    return true;
  });
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="px-4 py-4 ">
        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-[#1F2937] outfit">
          Quote Pack Management
        </h1>

        {/* Tabs and Create Button */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 mb-4 lg:items-center lg:flex-row outfit">
          <div className="flex gap-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-2 px-1 text-base font-medium transition-colors ${
                activeTab === "all"
                  ? "text-[#DF951F] border-b-2 border-amber-500"
                  : "text-[#111827] hover:text-gray-900"
              }`}
            >
              All Packs
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`pb-2 px-1 text-sm font-medium transition-colors ${
                activeTab === "premium"
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => setActiveTab("free")}
              className={`pb-2 px-1 text-sm font-medium transition-colors ${
                activeTab === "free"
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Free
            </button>
          </div>

          <Link to="/new-quote">
            {" "}
            <button className="flex items-center gap-2 px-3 py-2 text-lg text-white rounded-xl orange outfit over:bg-amber-600">
              <Plus size={16} />
              Create New Pack
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredPacks.map((pack) => (
            <QuotePackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default QuotePack;

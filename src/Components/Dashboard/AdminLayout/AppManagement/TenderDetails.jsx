import { useState } from "react";
import HeaderBar from "./HeaderBar";
import LeftPanel from "./LeftPannel/LeftPanel";
import RightPanel from "./RightPanel";

export default function TenderDetails() {
  const [isEdit, setIsEdit] = useState(false);

  // 🔹 ALL DATA COMES FROM HERE (COMMON)
  const tenderData = {
    appId: "21407",
    ministry: "Ministry of Home Affairs",
    organization: "Bangladesh Police",
    division: "Dhaka",
    procuringEntity: "Logistics, CID, Dhaka",
    publishingDate: "22-Dec-2023 14:45",
  };

  return (
    <div className="min-h-screen p-6 ">
      <div className="mx-auto bg-white rounded shadow ">
        <HeaderBar isEdit={isEdit} setIsEdit={setIsEdit} />

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-12">
          {/* LEFT SIDE */}
          <div className="md:col-span-9">
            <LeftPanel isEdit={isEdit} data={tenderData} />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3">
            <RightPanel isEdit={isEdit} data={tenderData} />
          </div>
        </div>
      </div>
    </div>
  );
}

import AppInfoSection from "./AppInfoSection";
import KeyInfoSection from "./KeyInfoSection";
import ParticularInfoSection from "./ParticularInfoSection";
import TendererInfoSection from "./TendererInfoSection";


export default function LeftPanel({ isEdit, data }) {
  return (
    <div className="space-y-6">
      <AppInfoSection isEdit={isEdit} data={data} />
      <KeyInfoSection isEdit={isEdit} />
      <ParticularInfoSection isEdit={isEdit} />
      <TendererInfoSection isEdit={isEdit} />
    </div>
  );
}

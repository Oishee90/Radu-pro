import Field from "../../../Reusable/Field";
import TextAreaField from "../../../Reusable/TextAreaField";


export default function TendererInfoSection({ isEdit }) {
  return (
    <div className="border rounded">
      <div className="px-4 py-2 font-semibold text-green-700 bg-green-50">
        Information for Tenderer / Consultant
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <TextAreaField
          label="Eligibility of Tenderer"
          value="Tenderers must have similar experience..."
          isEdit={isEdit}
        />

        <Field label="Evaluation Type" value="Lot wise" isEdit={isEdit} />
        <Field label="Tender Security Amount (BDT)" value="500" isEdit={isEdit} />
      </div>
    </div>
  );
}

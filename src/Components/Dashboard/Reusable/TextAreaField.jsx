export default function TextAreaField({ label, value, isEdit }) {
  return (
    <div className="col-span-2">
      <label className="text-xs text-gray-600">{label}</label>
      <textarea
        defaultValue={value}
        rows={4}
        disabled={!isEdit}
        className={`w-full mt-1 px-3 py-2 text-sm border rounded
        ${isEdit ? "bg-white" : "bg-gray-100 cursor-not-allowed"}`}
      />
    </div>
  );
}

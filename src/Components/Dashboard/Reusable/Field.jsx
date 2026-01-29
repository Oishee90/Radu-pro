export default function Field({ label, value, isEdit }) {
  return (
    <div>
      <label className="text-xs text-gray-600">{label}</label>
      <input
        defaultValue={value}
        disabled={!isEdit}
        className={`w-full mt-1 px-3 py-2 text-sm border rounded
        ${isEdit ? "bg-white" : "bg-gray-100 cursor-not-allowed"}`}
      />
    </div>
  );
}

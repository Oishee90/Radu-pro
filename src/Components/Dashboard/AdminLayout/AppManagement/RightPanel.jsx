export default function RightPanel({ isEdit, data }) {
  return (
    <div className="space-y-4">
      {/* KEY DATES – ALWAYS VISIBLE */}
      <div className="p-4 border rounded">
        <h3 className="mb-3 font-semibold">Key Dates</h3>

        <div className="px-3 py-2 text-sm text-green-700 bg-green-100 rounded">
          Publishing Date <br />
          <span className="font-semibold">{data.publishingDate}</span>
        </div>
      </div>

      {/* UPDATE BUTTON – ONLY WHEN EDIT */}
      {isEdit && (
        <button className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Update Now
        </button>
      )}
    </div>
  );
}

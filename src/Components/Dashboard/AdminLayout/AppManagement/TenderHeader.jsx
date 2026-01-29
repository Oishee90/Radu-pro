// TenderHeader.jsx
const TenderHeader = ({ appId }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            View / PQ / REOI / RFP / PSN Notice Details
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            APP ID: {appId}
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
          Published
        </span>
      </div>
    </div>
  );
};

export default TenderHeader;
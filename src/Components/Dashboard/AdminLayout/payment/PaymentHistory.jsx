const PaymentHistory = () => {
  const transactions = [
    {
      id: "pay_123456",
      user: "john.smith@example.com",
      amount: "$49.99",
      date: "2025-09-01",
      status: "successful",
      plan: "Premium Annual",
    },
    {
      id: "pay_123456",
      user: "john.smith@example.com",
      amount: "$49.99",
      date: "2025-09-01",
      status: "successful",
      plan: "Premium Annual",
    },
    {
      id: "pay_123456",
      user: "john.smith@example.com",
      amount: "$49.99",
      date: "2025-09-01",
      status: "failed",
      plan: "Premium Annual",
    },
    {
      id: "pay_123456",
      user: "john.smith@example.com",
      amount: "$49.99",
      date: "2025-09-01",
      status: "successful",
      plan: "Premium Annual",
    },
    {
      id: "pay_123456",
      user: "john.smith@example.com",
      amount: "$49.99",
      date: "2025-09-01",
      status: "successful",
      plan: "Premium Annual",
    },
  ];

  const getStatusColor = (status) => {
    return status === "successful"
      ? "text-green-600 bg-green-50"
      : "text-red-600 bg-red-50";
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto ">
        <div className="max-w-full">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#374151] uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[#374151] uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[#374151] uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[#374151] uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[#374151] uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-[#374151] uppercase">
                  Plan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tx.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tx.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tx.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        tx.status
                      )}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                    {tx.plan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
        <p>Showing 1–5 of 42 transactions</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-700 transition bg-gray-200 rounded-md hover:bg-gray-300">
            Previous
          </button>
          <button className="px-4 py-2 text-white transition bg-orange-600 rounded-md hover:bg-orange-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

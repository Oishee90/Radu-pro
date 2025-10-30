const PaymentSettings = () => {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 outfit">
      {/* Payment Gateway */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Gateway</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Provider
            </label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 text-center">
              Stripe
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              API Key
            </label>
            <input
              type="password"
              value="••••••••••••••••••••••••••••••••"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Webhook Secret
            </label>
            <input
              type="password"
              value="••••••••••••••••••••••••••••••••"
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button className="mt-6 px-6 py-2 orange text-white font-medium rounded-md transition">
            Save Changes
          </button>
        </div>
      </div>

      {/* Subscription Settings */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subscription Settings</h2>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 rounded" />
            <span className="text-sm text-gray-700">Enable free trial period</span>
          </label>

          <div className="flex items-center space-x-3">
            <label className="text-sm text-gray-700 w-32">Trial duration:</label>
            <input
              type="number"
              defaultValue={7}
              className="w-20 px-3 py-1 border border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-600">days</span>
          </div>

          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 rounded" />
            <span className="text-sm text-gray-700">Auto-renew subscriptions by default</span>
          </label>

          <label className="flex items-center space-x-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600 rounded" />
            <span className="text-sm text-gray-700">Allow users to cancel anytime</span>
          </label>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Plan for New Users
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option>Free Plan</option>
              <option>Premium Annual</option>
              <option>Premium Monthly</option>
            </select>
          </div>

          <button className="mt-6 px-6 py-2 orange text-white font-medium rounded-md transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
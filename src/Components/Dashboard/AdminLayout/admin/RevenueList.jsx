import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const RevenueList = ({ data }) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-xl outfit">
      <h3 className="mb-2 text-[20px] font-semibold">Revenue</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          {/* ✅ Background dotted grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884D8"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueList;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function BarChartBox({ data }) {
  return (
    <div className="p-5 bg-white shadow-md rounded-xl outfit">
      <h3 className="mb-2 font-semibold outfit text-[20px]">
        Subscription Growth
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          {/* background box/grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* thinner bars using barSize */}
          <Bar dataKey="free" name="Free User" fill="#DF951F" barSize={23} />
          <Bar
            dataKey="premium"
            name="Premium User"
            fill="#4C9869"
            barSize={23}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

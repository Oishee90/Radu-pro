import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const data = [
  { name: "Success", value: 5, color: "#3B82F6" },
  { name: "Relationships", value: 15, color: "#F97316" },
  { name: "Leadership", value: 20, color: "#FBBF24" },
  { name: "Mindfulness", value: 25, color: "#6EE7B7" },
  { name: "Motivation", value: 35, color: "#8B5CF6" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value,
}) => {
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const lineX = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
  const lineY = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <line
        x1={cx + outerRadius * Math.cos(-midAngle * RADIAN)}
        y1={cy + outerRadius * Math.sin(-midAngle * RADIAN)}
        x2={lineX}
        y2={lineY}
        stroke={data[index].color}
        strokeWidth={2}
      />
      <line
        x1={lineX}
        y1={lineY}
        x2={x > cx ? lineX + 20 : lineX - 20}
        y2={lineY}
        stroke={data[index].color}
        strokeWidth={2}
      />
      <text
        x={x > cx ? x + 5 : x - 5}
        y={y}
        fill={data[index].color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm"
        style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
      >
        {`${name} ${value}%`}
      </text>
    </g>
  );
};

export default function PieChartBox() {
  return (
    <div
      className="p-6 bg-white shadow-md rounded-xl"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <h3 className="mb-4 text-[20px] font-semibold outfit">
        Quote Category Engagement
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={75}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

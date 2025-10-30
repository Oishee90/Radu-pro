export default function StatsCard({ icon, title, value, change }) {
  const styles = {
    "Total Users": {
      borderColor: "#3B82F6",
      iconBg: "#DBEAFE",
      iconColor: "#3B82F6",
    },
    Revenue: {
      borderColor: "#22C55E",
      iconBg: "#DCFCE7",
      iconColor: "#22C55E",
    },
    "Pending Quotes": {
      borderColor: "#F97316",
      iconBg: "#FFEDD5",
      iconColor: "#F97316",
    },
    "Active Subscriptions": {
      borderColor: "#A855F7",
      iconBg: "#F3E8FF",
      iconColor: "#A855F7",
    },
  };

  const appliedStyle = styles[title] || {};

  return (
    <div
      className="flex items-center gap-3 p-4 bg-white border-l-4 shadow-md rounded-xl "
      style={{ borderLeftColor: appliedStyle.borderColor }}
    >
      <div
        className="flex items-center justify-center p-3 text-3xl rounded-full"
        style={{
          backgroundColor: appliedStyle.iconBg,
          color: appliedStyle.iconColor, // ✅ icon color applies here
        }}
      >
        {icon}
      </div>

      <div>
        <p className="text-base text-[#4B5563] outfit">{title}</p>
        <h2 className="text-lg font-semibold inter ">{value}</h2>
        <p className="text-sm text-[#22C55E] outfit">{change}</p>
      </div>
    </div>
  );
}

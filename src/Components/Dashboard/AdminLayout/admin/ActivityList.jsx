export default function ActivityList({ activities }) {
  // Group by day (Today / Yesterday)
  const grouped = activities.reduce((acc, activity) => {
    if (!acc[activity.day]) acc[activity.day] = [];
    acc[activity.day].push(activity);
    return acc;
  }, {});

  return (
    <div className="p-6 bg-white shadow-md rounded-xl outfit">
      <h3 className="mb-4 text-[20px] font-semibold">Recent Activity</h3>

      {Object.keys(grouped).map((day, dayIndex) => (
        <div key={dayIndex} className="mb-5">
          <p className="mb-2 font-medium text-gray-500 outfit">{day}</p>

          {grouped[day].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 py-3 border-b last:border-none"
            >
              {/* Colored Dot */}
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5"
                style={{ backgroundColor: item.color }}
              ></span>

              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item.title}: <span className="font-normal">{item.user}</span>
                </p>

                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

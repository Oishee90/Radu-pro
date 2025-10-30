import {
  FaUsers,
  FaMoneyBill,
  FaQuoteRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoTrendingUpOutline } from "react-icons/io5";
import StatsCard from "./admin/StatsCard";
import LineChartBox from "./admin/LineChartBox";
import BarChartBox from "./admin/BarChartBox";
import PieChartBox from "./admin/PieChartBox";
import ActivityList from "./admin/ActivityList";
import { FiDollarSign } from "react-icons/fi";
import RevenueList from "./admin/RevenueList";
const AdminDashboard = () => {
  const userGrowth = [
    { month: "Jan", users: 200 },
    { month: "Feb", users: 350 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 700 },
    { month: "May", users: 900 },
    { month: "Jun", users: 1100 },
  ];

  const subscriptionData = [
    { month: "Jan", free: 200, premium: 100 },
    { month: "Feb", free: 350, premium: 200 },
    { month: "Mar", free: 500, premium: 300 },
    { month: "Apr", free: 650, premium: 400 },
    { month: "May", free: 800, premium: 500 },
    { month: "Jun", free: 900, premium: 650 },
  ];

  const pieData = [{ value: 35 }, { value: 25 }, { value: 15 }, { value: 20 }];

const activities = [
  {
    title: "New user registered",
    user: "John Smith",
    time: "2 hours ago",
    color: "#3B82F6", // blue
    day: "Today",
  },
  {
    title: "New subscription",
    user: "Premium Monthly Plan",
    time: "4 hours ago",
    color: "#22C55E", // green
    day: "Today",
  },
  {
    title: "New quote submitted for moderation",
    user: "Sarah Johnson",
    time: "5 hours ago",
    color: "#F97316", // orange
    day: "Today",
  },
  {
    title: "New quote pack published",
    user: "Motivation Quotes Vol. 3",
    time: "Yesterday, 2:34 PM",
    color: "#A855F7", // purple
    day: "Yesterday",
  },
];


  return (
    <div className="min-h-screen p-6 outfit">
      <h1 className="mb-6 text-2xl font-bold text-[#1F2937]">
        Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          icon={<FaUsers />}
          title="Total Users"
          value="12,628"
          change="+2.5% from last week"
        />
        <StatsCard
          icon={<FiDollarSign />}
          title="Revenue"
          value="$6,389"
          change="+3.1% from last month"
        />
        <StatsCard
          icon={<FiMessageSquare />}
          title="Pending Quotes"
          value="42"
          change="+12 since yesterday"
        />
        <StatsCard
          icon={<IoTrendingUpOutline />}
          title="Active Subscriptions"
          value="2,354"
          change="+7.2% from last month"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        <LineChartBox data={userGrowth} />
        <RevenueList data={userGrowth} />
        <BarChartBox data={subscriptionData} />
        <PieChartBox data={pieData} />
      </div>

      {/* Activity */}
      <div className="mt-6">
        <ActivityList activities={activities} />
      </div>
    </div>
  );
};

export default AdminDashboard;

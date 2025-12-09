import {
  FaUsers,
  FaMoneyBill,
  FaQuoteRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FiMessageSquare, FiDollarSign } from "react-icons/fi";
import { IoTrendingUpOutline } from "react-icons/io5";
import StatsCard from "./admin/StatsCard";
import LineChartBox from "./admin/LineChartBox";
import { useGetStatsQuery } from "../../../Redux/feature/authapi";

const AdminDashboard = () => {
  const { data, isLoading, error } = useGetStatsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  // Transform API user_growth data into chart format
  const userGrowth =
    data?.user_growth?.months?.map((month, index) => ({
      month,
      users: data.user_growth.users[index] || 0,
    })) || [];

  return (
    <div className="min-h-screen p-6 outfit">
      <h1 className="mb-6 text-2xl font-bold text-[#1F2937]">
        Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        <StatsCard
          icon={<FaUsers />}
          title="Total Users"
          value={data?.total_users?.count || 0}
        />
        <StatsCard
          icon={<FiDollarSign />}
          title="Revenue"
          value={data?.revenue || 0}
        />
        <StatsCard
          icon={<FiMessageSquare />}
          title="Pending Quotes"
          value={data?.pending_quotes || 0}
        />
        <StatsCard
          icon={<IoTrendingUpOutline />}
          title="Active Subscriptions"
          value={data?.active_subscriptions || 0}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 mt-6 ">
        <LineChartBox data={userGrowth} />
      </div>
    </div>
  );
};

export default AdminDashboard;

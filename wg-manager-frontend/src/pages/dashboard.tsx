import { withRoot } from "@/hocs/root.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";

const Dashboard = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default withRoot(Dashboard);

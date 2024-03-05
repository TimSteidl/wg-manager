import { Calendar } from "@/components/ui/calendar.tsx";
import withRoot from "@/hocs/root.tsx";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

const Dashboard = () => {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  return (
    <div className={"flex justify-center"}>
      <Calendar
        today={new Date()}
        mode={"range"}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        ISOWeek
        showWeekNumber
        formatters={{
          formatWeekNumber: (weekNumber) => `KW ${weekNumber}`,
        }}
      />
    </div>
  );
};

export default withRoot(Dashboard);
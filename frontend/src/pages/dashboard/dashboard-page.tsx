
import {CChart} from "@coreui/react-chartjs";

const DashboardPage = () => {

  return (
      // use <CChart type="line"> or <CChartLine> component
      <CChart
          type="line"
          data={{
            labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7","t8","T9","T10","T11","T12"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "#f87979",
                borderColor: "#f87979",
                pointBackgroundColor: "#FF6384",
                pointBorderColor: "#fff",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40,12,12,89]
              }
            ],
          }}
      />

  );
};

export default DashboardPage;

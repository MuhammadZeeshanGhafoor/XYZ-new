import DonutChart from "react-donut-chart";
//things I would never do:
const DChart = () => {
    return (
        <DonutChart
            data={[
                {
                    label: "Give you up",
                    value: 25,
                },
                {
                    label: "new",
                    value: 38,
                },
                {
                    label: "new2",
                    value: 37,
                }
            ]}
        />
    );
};

export default DChart;

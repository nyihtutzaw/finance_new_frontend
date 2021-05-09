import Chart from "react-google-charts";
const BarChart = ({annuals}) => {

    var dataLists=[
        ['', 'Revenue', 'Earning'],
    ];

    annuals.forEach((val)=>{dataLists.push([val.year,val.revenue,val.earning]);})

    return (
        <Chart
            height={400}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={dataLists}
            options={{
                title: 'Annual Quarterly',
                vAxis: {
                    title: '',
                },
                colors: ['#CFB379', '#039A35'],
            }}
            legendToggle
        />
    )
}
export default BarChart;
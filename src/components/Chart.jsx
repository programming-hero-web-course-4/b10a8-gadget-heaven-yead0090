import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";


const Chart = () => {
    const deviceUserData = [
        { year: 2019, mobile: 4200, desktop: 2800, tablet: 900 },
        { year: 2020, mobile: 4700, desktop: 2600, tablet: 950 },
        { year: 2021, mobile: 5300, desktop: 2500, tablet: 1000 },
        { year: 2022, mobile: 5800, desktop: 2300, tablet: 1100 },
        { year: 2023, mobile: 6300, desktop: 2100, tablet: 1200 },
      ];
    return (
        <div>

            <p className="text-black text-3xl font-bold mb-14">Device Users Number during last 5 year</p>
            
            <BarChart width={500} height={500} data={deviceUserData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={'year'}></XAxis>
                <YAxis></YAxis>
            <Bar dataKey={'mobile'} fill="pink"></Bar>
                <Bar dataKey={'desktop'} fill="violet"></Bar>
                <Bar dataKey={'tablet'} fill="blue"></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;
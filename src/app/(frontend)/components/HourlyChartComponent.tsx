import React from 'react';

type HourData = {
  hour: number; // 0–23
  value: number; // 0–50
};

type Props = {
  data: HourData[]; // array of 24 values
};

const HourlyBarChart: React.FC<Props> = ({ data }) => {
  const maxVal = 50;
  console.log(data);
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-end h-48 gap-1 relative w-full">
        {data.map(({ hour, value }) => (
          <div key={hour} className="group relative flex flex-col items-center h-full w-full">
            <div
              className="w-full bg-red-500  text-center rounded-t-sm transition-all duration-200 group-hover:bg-red-700 absolute bottom-0 "
              style={{ height: `${(value / maxVal) * 100}%` }}
            >
              <span className="text-xs text-white hover:cursor-pointer">{`${value}`}</span>
            </div>
            <div className="absolute -top-6 hidden group-hover:block text-xs bg-gray-800 text-white px-2 py-1 rounded shadow">
              {`Total events: ${value}`}
            </div>
            <div className="text-[10px] mt-1 absolute -bottom-6">{hour}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-600 mt-8 text-center">Hour of Day</div>
    </div>
  );
};

export default HourlyBarChart;

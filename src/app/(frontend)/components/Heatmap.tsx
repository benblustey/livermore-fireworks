import React from 'react';

interface HeatmapData {
  date: string;
  value: number;
}

interface HeatmapProps {
  data: HeatmapData[];
  startDate: Date;
  endDate: Date;
  colorScale?: string[];
}

const Heatmap: React.FC<HeatmapProps> = ({
  data,
  startDate,
  endDate,
  colorScale = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
}) => {
  const getColorForValue = (value: number) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const normalizedValue = value / maxValue;
    const colorIndex = Math.floor(normalizedValue * (colorScale.length - 1));
    return colorScale[colorIndex];
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const generateDateRange = () => {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  };

  const dates = generateDateRange();

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date,i) => {
          const dateStr = formatDate(date);
          const dataPoint = data.find(d => d.date === dateStr);
          const value = dataPoint?.value || 0;
          
          return (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor: getColorForValue(value),
                cursor: 'pointer'
              }}
              title={`${dateStr}: ${value} incidents`}
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-2 gap-1">
        {colorScale.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default Heatmap; 
export default function ExpenseChart({ items }) {
  const groupDataByMonth = {};

  for (let i = 0; i < 12; i++) {
    groupDataByMonth[i] = [];
  }
  items.forEach((item) => {
    const month = new Date(item.date).getMonth();

    groupDataByMonth[month].push(item);
  });

  const totalByMonth = Object.keys(groupDataByMonth).map((m) => {
    return groupDataByMonth[m].reduce((prev, item) => {
      return prev + parseInt(item.amount);
    }, 0);
  });

  const max = Math.max(...totalByMonth);

  const chartData = totalByMonth.map((item) => {
    return (item / max) * 100;
  });

  return (
    <div className="px-4 py-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <div className="chart">
            {chartData.map((value, index) => (
              <div key={index}>
                <div className="inner" style={{ height: `${value}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

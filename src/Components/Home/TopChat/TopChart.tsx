import { topCharts } from "../../../data/collection_list";


export default function TopChart() {
  return (
    <section>
      <h1>Top Charts</h1>
      <div className="list-container">
        {topCharts.map((chart, i) => (
          <div className="card" key={i}>
            <div>
              <img src={chart.image} alt={chart.name} />
            </div>
            <p>{chart.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

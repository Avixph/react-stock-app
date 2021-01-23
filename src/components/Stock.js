import "../css/Stock.css";

function Stock({ symbol, companyName, latestPrice, changePercent }) {
  const percentageColor = changePercent < 0 ? "red" : "green";
  console.log(percentageColor);

  return (
    <div className="app-view">
      <div className="single-company-stock">
        <h2 className="company-stock-symbol">{symbol}</h2>
        <h5 className="company-name">{companyName}</h5>
        <p className="company-stock-price">{latestPrice}</p>
        <p className={percentageColor}>{(changePercent * 100).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default Stock;

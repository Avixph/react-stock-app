import "../css/Stock.css";

function Stock({ symbol, companyName, latestPrice, changePercent }) {
  const percentageColor = changePercent < 0 ? "red" : "green";
  console.log(percentageColor);

  return (
    <div className="app-view">
      <div className="single-company-stock">
        <div className="company-info">
          <h2 className="company-stock-symbol">{symbol}</h2>
          <h5 className="company-name">{companyName}</h5>
        </div>
        <div className="stock-info">
          <p className="company-stock-price">{latestPrice}</p>
          <p className={percentageColor}>
            {changePercent ? `${(changePercent * 100).toFixed(2)}%` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stock;

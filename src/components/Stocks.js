import "../css/Stocks.css";
import { useState, useEffect } from "react";
import Stock from "./Stock";
import GetStockInfo from "../services/GetStockInfo";
import StockSearch from "./StockSearch";

function Stocks() {
  const [browseStock, setBrowseStock] = useState([]);

  useEffect(() => {
    async function deafaultStocks() {
      const NDAQ = await GetStockInfo("ndaq");
      const SPY = await GetStockInfo("spy");
      const FB = await GetStockInfo("fb");
      const SNAP = await GetStockInfo("snap");
      setBrowseStock([NDAQ, SPY, FB, SNAP]);
    }
    deafaultStocks();
  }, []);

  return (
    <main className="app-main">
      <StockSearch browseStock={browseStock} setBrowseStock={setBrowseStock} />
      {browseStock.map((stock, index) => {
        return <Stock {...stock} key={index} />;
      })}
    </main>
  );
}

export default Stocks;

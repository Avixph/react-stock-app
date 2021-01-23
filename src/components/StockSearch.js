import "../css/StockSearch.css";
import { useState } from "react";
import GetStockInfo from "../services/GetStockInfo";

function StockSearch({ browseStock, setBrowseStock }) {
  const [symbolSearch, setSymbolSearch] = useState("");

  const handleChange = (event) => {
    setSymbolSearch(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const info = await GetStockInfo(symbolSearch);
    setBrowseStock([...browseStock, info]);
  };
  console.log(browseStock);

  return (
    <div className="stock-search">
      <form action="" className="search-bar">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button type="submit" onClick={handleSearch}>
          ➔
        </button>
      </form>
    </div>
  );
}

export default StockSearch;

import axios from "axios";
import { STOCK_URL } from "./Constants";
import { STOCK_KEY } from "./Constants";

async function GetStockInfo(companySymbol) {
  const StockAPI = `${STOCK_URL}/${companySymbol}/quote?token=${STOCK_KEY}`;

  const StockInfo = await axios.get(StockAPI).then(({ data }) => {
    return data;
  });
  return StockInfo;
}

export default GetStockInfo;

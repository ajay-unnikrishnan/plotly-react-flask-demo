import axios from 'axios';
export default class DataService {
    baseUrl = "http://127.0.0.1:5000/"    
    appleStockGraphUrl = this.baseUrl + "get-apple-stock-graph"
    appleStockDataUrl = this.baseUrl + "get-apple-stock-data"
    
    async getAppleStockGraphPlot(){
        return await axios.get(this.appleStockGraphUrl)
    }

    async getAppleStocksData(){
        return await axios.get(this.appleStockDataUrl)
    }
}
import axios from 'axios';
export default class DataService {
    base_url = "http://127.0.0.1:5000/"    
    apple_stock_graph_url = this.base_url + "get-apple-stock-graph"
    
    async get_apple_stock_graph_plot(){
        return await axios.get(this.apple_stock_graph_url)
    }
}
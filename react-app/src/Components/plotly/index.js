import React from "react";
import DataService from "../../data_service";
import Plot from 'react-plotly.js';

export class PlotlyGraphFromAPI extends React.Component {
    constructor(props){
        super(props)
        this.service = new DataService()
        this.state = {           
            plot: null
        }
    }
    async componentDidMount() {         
        const response = await this.service.getAppleStockGraphPlot()
        this.setState({plot:response.data})
    }
    render() {
        return(
            <div>
                <div>Created the plotly graph in the flask api and sent to client side as json</div> <br/>           
                {
                    this.state.plot != null &&
                    <Plot data={this.state.plot.data} layout={this.state.plot.layout}/>
                }                
            </div>
        )
    }
}
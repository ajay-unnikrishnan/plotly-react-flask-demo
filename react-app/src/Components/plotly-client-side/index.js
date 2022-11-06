import React from "react";
import DataService from "../../data_service";
import Plot from 'react-plotly.js';

export class PlotlyClientSide extends React.Component {
    constructor(props){
        super(props);
        this.service = new DataService();
        this.state = {
            xAxisData : [],
            yAxisData : []
        }
    }
    async componentDidMount(){
        const response = await this.service.getAppleStocksData();        
        this.setState({ xAxisData : response.data.x, yAxisData : response.data.y })
        
    }
    render() {
        return(
            <div>
                <p>Plotly graph created in the client side using the data from API</p>
                <div>
                    <Plot
                        data = {
                            [
                                {
                                    x: this.state.xAxisData,
                                    y: this.state.yAxisData,
                                    type: 'line',
                                    mode: 'lines+markers',
                                    marker: {color: 'red'},
                                },                                
                            ]
                        }
                        layout={ {width: 720, height: 540, title: 'A Fancy Plot'} }
                    />                    
                </div>
            </div>
        )
    }
}

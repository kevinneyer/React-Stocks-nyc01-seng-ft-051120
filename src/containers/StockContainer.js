import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

   render(){
    let stocks = this.props.stocks

    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={this.props.addPortfolio} clickHandler={this.props.clickHandler}/> )}
      </div>
    );
   }
}

export default StockContainer;

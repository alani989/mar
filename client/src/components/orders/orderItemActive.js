import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import RemoveOrder from './removeOrder';
import ShipOrder from './shipOrder';

export default class OrderItemActive extends Component {

    render() {
        return (
            <Jumbotron>
                <div className='item'>
                    <h3>Reference #: {this.props.order.reference}</h3>
                    <p>Client: {this.props.order.account_name}</p>
                    <p>Ship To Address: {this.props.order.ship_to}</p>
                    <p>Ship Date: {this.props.order.ship_date}</p>
                    <p>Status: {this.props.order.status}</p>

                    <ShipOrder reference={this.props.order.reference} />
                    <br/>
                    <RemoveOrder reference={this.props.order.reference} />
                </div>
            </Jumbotron>
        )
    }
}//end class
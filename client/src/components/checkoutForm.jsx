import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({ name: this.state.customerName });
            await postCharge({ id: token.token.id, amount: 10 });
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <input className="form-control" onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                </div>
                <CardSection />
                <button className="btn btn-secondary">SUBMIT</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);

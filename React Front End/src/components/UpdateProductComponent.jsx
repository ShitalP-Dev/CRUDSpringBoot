import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name1: '',
            qty: '',
            price: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let e = res.data;
            this.setState({name1: e.name1,
                qty: e.qty,
                price : e.price
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let em = {name1: this.state.name1, qty: this.state.qty, price: this.state.price};
        console.log('em => ' + JSON.stringify(em));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(em, this.state.id).then( res => {
            this.props.history.push('/product');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name1: event.target.value});
    }

    changeQtyHandler= (event) => {
        this.setState({qty: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/product');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="name1" className="form-control" 
                                                value={this.state.name1} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="qty" name="qty" className="form-control" 
                                                value={this.state.qty} onChange={this.changeQtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent

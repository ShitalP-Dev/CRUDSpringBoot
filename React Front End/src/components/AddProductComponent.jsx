import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class AddProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            qty: '',
            price: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let p = res.data;
                this.setState({name1: p.name1,
                   qty: p.qty,
                   price:p.price
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let p = {name1: this.state.name1, qty: this.state.qty, price: this.state.price};
        console.log('p => ' + JSON.stringify(p));

        // step 5
        if(this.state.id === '_add'){
            ProductService.addProduct(p).then(res =>{
                this.props.history.push('/product');
            });
        }else{
            ProductService.updateProduct(p, this.state.id).then( res => {
                this.props.history.push('/product');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder=" Product Name" name="name1" className="form-control" 
                                                value={this.state.name1} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="qty" className="form-control" 
                                                value={this.state.qty} onChange={this.changeQtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default AddProductComponent

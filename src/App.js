import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Item from './Item/Item';
import Bill from './Bill/Bill';
import OrderItem from './OrderItem/OrderItem';

class App extends Component {

// Note: Assign drinks with id = 0, food with id = 1
  state = {
    items: [
      { name: 'Filter Coffee', price: 2, id:0 },
      { name: 'Hot Chocolate', price: 3, id:0  },
      { name: 'Cappuccino', price: 2.50, id:0  },
      { name: 'Orange Juice', price: 2, id:0  },
      { name: 'Sparkling Water', price: 1.50, id:0  },
      { name: 'Lemonade / Cola', price: 2, id:0  },
      { name: 'Salmon Bagel', price: 7, id:1 },
      { name: 'Grilled Cheese', price: 4.50, id:1 },
      { name: 'Tomato Soup', price: 4, id:1 },
      { name: 'Bean Burrito', price: 6, id:1 },
      { name: 'Spinach Pie', price: 7, id:1 },
      { name: 'Daily Special', price: 7, id:1 },
  ],

// This starts as an empty array for each new customer.
    customerOrder: [
  ],

// This starts as 0 for each new customer, until items are added.
  bill: 0,

// Unlike two above, these continue to update until program is restarted. 
  revenue: 0,
  customerCount: 0,
}


// ------  HANDLERS ------ //


orderItemHandler = (index) => {

 //we add item price to running customer 'bill'
  let currentBill = this.state.bill;
  let addToBill = this.state.items[index].price;
  let newBill = currentBill + addToBill;

 //push item to the 'customer order' array
  const customerOrder = [...this.state.customerOrder];
  const itemToAdd = {}
  itemToAdd.name = this.state.items[index].name;
  itemToAdd.price = this.state.items[index].price;
  customerOrder.push(itemToAdd);

 //we set state!
  this.setState( { customerOrder: customerOrder } )
  this.setState({ bill: newBill })
};


payBillHandler = () => {
  
 alert("Are you sure?"); 

 //calculate new total revenue
  let revenue = this.state.revenue;
  let bill = this.state.bill;
  let newRevenue = bill + revenue;

 //calculate the new customer count 
  let customerCount = this.state.customerCount
  let newCustomerCount = customerCount + 1

//we set the updated state values
  this.setState({revenue: newRevenue})
  this.setState({customerCount: newCustomerCount})
 
 //and reset these ones for the new customer
  this.setState({bill: 0})
  this.setState({customerOrder: []})
};



// ------  DEFINING AND RENDERING  ------ //

render() {


 let drinks = (
       <div>
        {this.state.items.map((item, index) => {

     //we are ONLY mapping drink items by using item id
          if (item.id == 0) {
          return <Item
          name={item.name}
          price={item.price}
    //Using an arrow function as below means we do not have to 'bind'
          click={() => this.orderItemHandler(index)}/>
         }
        })} 
      </div> 
    );

  let food = (
       <div>
        {this.state.items.map((item, index) => {

     //we are ONLY mapping food items by using item id     
          if (item.id == 1) {
          return <Item
          name={item.name}
          price={item.price}
          click={() => this.orderItemHandler(index)}/>
         }
        })} 
      </div> 
    );


  let orderItems = (
       <div>
        <h2>Items Selected</h2>
         {this.state.customerOrder.map((orderItem, index) => {
          return <OrderItem
          item={orderItem.name}
          price={orderItem.price}/>
        })} 
      </div> 
    );



// ------  THE RETURN BLOCK  ------ //

return (
  <div className="App">


{/* HEADER */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Nine / Self Service Cafe</h2>
        </header>


{/* DAILY TAKINGS */}
    <div>
     <p>Takings: ${this.state.revenue} / Customers: {this.state.customerCount}</p>
    </div>


{/* DRINKS & FOOD MENU */}
    <div>
          <div className="Menu-section">
              <h1>Drinks Menu</h1>
                  
                  <ul>
                    {drinks}
                  </ul>

          </div>
          <div className="Menu-section">
              <h1>Food Menu</h1>
                  
                  <ul>
                    {food}
                  </ul>
          </div>
    </div>


{/* ORDER SUMMARY AND TOTAL */}


    <div>
          <div className="Menu-section">
                  <ul>
                    {orderItems}
                  </ul>
          </div>
          <div className="Menu-section">
                  <Bill
                    total={this.state.bill}
                    click={() => this.payBillHandler()}
                  />
          </div>
    </div>


   </div>
  );
 }
}

export default App;


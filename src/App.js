import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Booklist from './book.js';
import Myuser from './user';
import Myproduct from './product.js';
import Myitem from './item.js'; // siyaram software academy 

function App() {
  return (
		  <HashRouter>
			
			<Link to="/">Book List</Link>
			<Link to="/userlist">User List</Link>
			<Link to="/productlist">Product List</Link>
			<Link to="/itemlist">Item List</Link>

			<Route exact path="/" component={Booklist}/>
			<Route exact path="/userlist" component={Myuser}/>
			<Route exact path="/productlist" component={Myproduct}/>
			<Route exact path="/itemlist" component={Myitem}/>
		  </HashRouter>
       );
}

export default App;

import './App.css';
//import Sample8 from './CC2/Day8';
//import Aji from './CC2/Day7';
import Entry from "./CC2/Entry";
import List from "./CC2/List";
import React from 'react';

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
    </div>
  );
}

/*export default function App() {
  return (
    <div>
      <Aji />
    </div>
  );
}*/
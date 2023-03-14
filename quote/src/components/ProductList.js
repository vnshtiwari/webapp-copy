import React from "react"
import { Link } from "react-router-dom";
import * as singleSpa from 'single-spa';

const Table = ({ data, column }) => {
    return (
      <table>
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem key={index} item={item}/>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow key={index} item={item} column={column} />)}
        </tbody>
      </table>
    )
  }
  
  const TableHeadItem = ({ item, index }) => <th key={index}>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
  
        if(columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.') //['address', 'city']
          return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
  
        return <td key={index}>{item[`${columnItem.value}`]}</td>
      })}
      <td style={{padding: 20}}>
      {/* <a onClick={() => {
console.log("*****", item)
      }}>💅</a> */}
<a onClick={() => {
  singleSpa.navigateToUrl(`/productDetail/${item.id}`);
}}>Click for detail</a>


       {/* <Link to={`/productDetail/${item.id}`}>Click Here</Link> */}
       </td>
    </tr>
)
const ProductList = () => {
    const column = [
        { heading: 'Name', value: 'name' },
        { heading: 'Email', value: 'email' },
        { heading: 'Phone', value: 'phone' },
        { heading: 'City', value: 'address.city' },
      ]

    const dataTable = [
        {
          "id": 12,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 13,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }];  
    return (
        <div className="App">
          <h1>Dynamic Table</h1>
          <Table data={dataTable} column={column} />
        </div>
      );
}
export default ProductList;
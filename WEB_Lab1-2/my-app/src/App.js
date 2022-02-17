import './App.css';
import nft from './nft'
// import first from './first'


function App() {

  let res = nft.map(function (item) {
    if (item.change > 0) {
      return <tr key={item.id} className='tr'>
        <td>{item.stock_name}</td>
        <td>{item.company_name}</td>
        <td>{item.price}</td>
        <td>{item.currency}</td>
        <td className='bull'>{item.change}</td>
      </tr>;
    }

    else if (item.change < 0) {
      return <tr key={item.id} className='tr'>
        <td>{item.stock_name}</td>
        <td>{item.company_name}</td>
        <td>{item.price}</td>
        <td>{item.currency}</td>
        <td className='bear'>{item.change}</td>
      </tr>;
    }
  });



let first = check.map(function (item)
{

    return <tr>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
    </tr>;
});



let second = check.map(function (item)
{
    return <tr>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
      <td className='black'></td>
      <td className='white'></td>
    </tr>;
});


  return <div>
    <table className='table'>
      <thead>
        <tr className='th'>
          <td>Акция</td>
          <td>Компания</td>
          <td>Цена</td>
          <td>Валюта</td>
          <td>Изменение</td>
        </tr>
      </thead>
      <tbody>
        {res}
      </tbody>
    </table>



    <table className='checkmate'>
      {/* <thead>
        <tr>
          <td>Акция</td>
          <td>Компания</td>
          <td>Цена</td>
          <td>Валюта</td>
          <td>Изменение</td>
        </tr>
      </thead> */}
      <tbody>
        {first}
        {second}
        {first}
        {second}
        {first}
        {second}
        {first}
        {second}
      </tbody>
    </table>
  </div>
}




export default App;
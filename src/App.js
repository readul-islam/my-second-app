// import logo from './logo.svg';
import './App.css';




function App() {
  const friends = [
    { name: 'Readul Islam', aim:'MERN Stack Developer'},
    { name: 'Jubyer Ahamed', aim:'MERN Stack Developer'}
  ];
  const nayoks = ['Rajib', 'Salman', 'Sakib Khan'];
  
  return (
    <div className="App">
     { 
      friends.map(friend => <Country name = {friend.name} aim = {friend.aim}></Country>)
     }
     { 
     nayoks.map(nayok => <Actor name = {nayok}></Actor>)
     }
    </div>
  )
};

function Country(props) {
  console.log(props);
  return(
    <div className="country">
      
      <h1>{props.name}</h1>
      <h4>{props.aim}</h4>
    </div>
  );
}
function Actor(props){
  return(
    
    <div className="country">
      <h1>{props.name}</h1>
      </div>
    
  )
}

export default App;

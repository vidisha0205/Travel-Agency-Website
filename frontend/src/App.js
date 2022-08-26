
import goa from './goa.png'
import agra from './agra.png'
import bang from './bangalore.png'
import hyd from './hyderabad.png'
import jai from './JAipur.png'
import mann from './manali.png'
import munn from './Munnar.png'
import './App.css'
import SignUp from './components/main.js'
function App() {
  var x=0;
  return (
    <div style={{background: "white" }}>
      <div className="Heading" style={{color:"white", backgroundColor:"rgba(7, 77, 182, 0.986)"}}><center>TRAVEL INDIA</center></div>
      <right><div style={{backgroundColor:"black",padding:"10px", fontSize:"20px"}}>
        <ul>
          <li><a style={{color:"white"}}href=" " name="home">HOME</a></li>
          <li><a style={{color:"white"}} href="http://127.0.0.1:8887/about.html" name="about">ABOUT</a></li>
          <li><a style={{color:"white"}} href="http://127.0.0.1:8887/contact.html" name="contact">CONTACT</a></li>
          <li><a style={{color:"white", marginLeft:'500px'}} href="http://127.0.0.1:8887/main2.html">PLACES</a></li>
        </ul>
      </div>
      </right>
      <div style={{fontSize:'30px',fontFamily:'Times New Roman'}}>
      <img className="image" place="Goa" src={goa} alt="Goa"/>
      GOA
      <img className="image" place="Agra" src={agra} alt="Agra"/>
      AGRA
      <img className="image" place="Bangalore" src={bang} alt="Bangalore"/>
      BANGALORE
      <img className="image" place="Hyderabad" src={hyd} alt="Hyderabad"/>
      HYDERABAD
      <img className="image" place="Jaipur" src={jai} alt="Jaipur"/>
      JAIPUR
      <img className="image" place="Manali" src={mann} alt="Manali"/>
      MANALI
      <img className="image" place="Munnar" src={munn} alt="Munnar"/>
      MUNNAR
    </div>
    <br/>
    <center><div id="1" style={{display:"block", fontSize:'25px',}}>Interested? <br/> Fill out the form below!
    <SignUp/>
    </div></center>
  </div>
  );
}

export default App;

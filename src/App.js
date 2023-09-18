
import './App.css';


function App() {

 
  return (
  
<>
<div className='container'>
<section className='img'>
  <img className='img2' src={require('./Subtract2.png')}></img>
</section>
<section className='logcontainer'>
 
<div className='textlog'>
   <div className='tex1'> Log in</div>   
  <div>
    Welcome on board with us !
  </div>
</div>
  <form action="#">
          <div className="data">
            <label>Email address</label>
            <input type="text" required />
          </div>
<div className="data">
            <label>Password</label>
            <input type="password" required />
          </div>
<div className="forgot-pass">
<a href="#">Forgot Password?</a></div>
<div className="btn">
            <div className="inner">
</div>
<button type="submit">login</button>
          </div>
<div className="signup-link">
New to login ? <a href="#"> Register Here</a></div>
</form>

</section>
</div>
  
 









</>
  );
}

export default App;

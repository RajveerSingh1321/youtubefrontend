// import './HomePage.css';

// const HomePage = () => {
//     return <div>
    
//     <div className="wrapper">
//         <div className="nav">
//             <div className="logo">
//                 <div className="icon"></div>
//                 <div className="name">YOUTUBE</div>
//             </div>
//             <div className="search">
//                 <div className="bar">
//                     <input tyoe="text"></input>
//                 </div>
//                 <div className="s"></div>
//             </div>
//             <div className="sign"></div>
//         </div>
//         <div className="body">
//             <div className="sidebar"></div>
//             <div className="main">
                
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div classNameName="item"></div>
                
                
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div>
                
                
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div> 
//                     <div className="item"></div>
//                     <div className="item"></div>
//                     <div className="item"></div>
                    
//             </div>
//         </div>
//     </div>
// </div>
    
    
    
    
  
// };

// export default HomePage;
import "./HomePage.css";
import VideoComponent from "./videocomponent";
import logo from "./youtubelogo.jpg"


const HomePage=()=>{
    return(
    <div className="wrapper">
        <div className="header">
            <div className="logo" ><div class="h1b"><img src={logo} className="ytphoto"></img></div></div>
            <div className="search"><div class="h2a"></div><div class="h2b"></div></div>
            <div className="signin">
                <label for="signin">Signin</label>
                <input type="button" name="signin" id="signin"/></div>
        </div>
        <div className="container">
            <div className="side">
                <div className="HOME"></div>
                <div className="ABOUT"></div>
                <div className="CONTACT US"></div>
           
                <div className="HOLLYWOOD"></div>
            </div>
            <div className="main">
              
             
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />


               
            </div>
        </div>
    </div>
);};
export default HomePage;
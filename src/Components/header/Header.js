
 import React from 'react'; 
 import 'bootstrap/dist/css/bootstrap.min.css';

 function Header() {
  const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";
   return (
     <header className='headBar' style={headerStyle[currentTheme]}>
       <div style={containerStyle}>
         <h1>Welcome to our movie app</h1>
         <p>Millions of movies, TV shows, and people to discover. Explore now.</p>
         <div style={searchContainerStyle}>
           <input type="text" placeholder="Search" style={searchBarStyle} />
           <button style={searchButtonStyle} >Search</button>
         </div>
       </div>
     </header>
   );
 }

 const headerStyle = {
  lightmode: {
   backgroundColor: '#f1f1f1', 
   padding: '20px',
   borderRadius: '10px',
   color:"black", 
  }, 
  darkmode: {
   backgroundColor: '#333', 
   padding: '20px',
   borderRadius: '10px', 
   color:'white',
  }
  };

 const containerStyle = {
   maxWidth: '1200px',
   margin: 'auto', 
   textAlign: 'left', 
   paddingLeft: '10px',
   lightmode: {
    backgroundColor: '#f1f1f1', 
    color:"black", 
   }, 
   darkmode: {
    backgroundColor: '#333', 
    color: 'white', 
   }

 };

 const searchContainerStyle = {
   display: 'flex',
   alignItems: 'center',
   marginTop: '10px',
   lightmode: {
    backgroundColor: '#f1f1f1', 
    color:"black", 
   }, 
   darkmode: {
    backgroundColor: '#333', 
    color: 'white', 
   }
 };

 const searchBarStyle = {
   flex: '1',
   padding: '10px',
   borderRadius: '5px',
   border: '1px solid #ccc',
   marginRight: '10px', 
 };

 const searchButtonStyle = {
  padding: '10px 20px',
  color: '#333',
  backgroundColor: "#ffeb3b",
  border: '1px solid yellow',
  borderRadius: '5px',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
};

 export default Header;









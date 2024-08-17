
 import React from 'react'; 

 function Header() {
   return (
     <header style={headerStyle}>
       <div style={containerStyle}>
         <h1>Welcome to our movie app</h1>
         <p>Millions of movies, TV shows, and people to discover. Explore now.</p>
         <div style={searchContainerStyle}>
           <input type="text" placeholder="Search" style={searchBarStyle} />
           <button style={searchButtonStyle}>Search</button>
         </div>
       </div>
     </header>
   );
 }

 const headerStyle = {
   backgroundColor: '#f1f1f1', // Lighter background color
   padding: '20px',
   borderRadius: '10px', // Rounded corners for the container
 };

 const containerStyle = {
   maxWidth: '1200px',
   margin: '0', // Remove margin to make it start from the left
   textAlign: 'left', // Align content to the left
   paddingLeft: '10px', // Slight padding to not stick to the edge completely
 };

 const searchContainerStyle = {
   display: 'flex',
   alignItems: 'center',
   marginTop: '10px',
 };

 const searchBarStyle = {
   flex: '1',
   padding: '10px',
   borderRadius: '5px',
   border: '1px solid #ccc',
   marginRight: '10px', // Small space between the search bar and the button
 };

 const searchButtonStyle = {
   padding: '10px 20px',
   backgroundColor:'yellow',
   color: '#333',
   border: '1px solid black',
   borderRadius: '5px',
   cursor: 'pointer',
 };

 export default Header;









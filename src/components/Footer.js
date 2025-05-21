import React from "react"; 

function Footer() {
    return(
        <footer
        style = {{
            backgroundColor: 'transparent',
            padding: '20px',
            textAlign: 'left',
            position: 'absolute',
            bottom : '0',
            width: '100%',
            color: 'white',
        }}
        >
       <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: '700', color: 'white', fontSize: '18px' }}>
  Based in Yukon, OK
</h1>

       </footer>
    );
}
export default Footer; 


import React from 'react';
import './Main.css';

function Main() {
  return ( 
    <main id="advertisement">
        <div className="Video">
            <video src="../midia/maldives.mp4" autoPlay muted loop></video>
        </div>
    
        <section className="container">
            <div className="advertisement">
                <h2>Maldivas</h2>
                <p>A ordem dos tratores não altera o viadutis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
            </div>
        </section>
    </main>
  );
}

export default Main;
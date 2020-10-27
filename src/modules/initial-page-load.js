function generateHomeContent() {
    var element = document.createElement('div');
    
    element.innerHTML = ` 
        <div id="home-container">
            <div id="home-showcase-container">
                <div class="black-div">
                    <h1>My restaurant</h1>
                </div>


                <div class="black-div">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec gravida sollicitudin urna nec varius. 
                        Curabitur sed orci in est finibus vulputate. Maecenas pretium dolor in diam ullamcorper egestas. 
                        Nam eu velit lorem. 
                    </p>
                </div>
            </div>
            
            <div id="home-misc-info" class="black-div">
                <div id="misc-info-divider">
                    <div>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec gravida sollicitudin urna nec varius. 
                            Curabitur sed orci in est finibus vulputate. Maecenas pretium dolor in diam ullamcorper egestas. 
                            Nam eu velit lorem.                         
                        </p>
                    </div>
                    
                    <div>
                        <button id="order-btn">Reserve a table</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return element;
}

export default generateHomeContent
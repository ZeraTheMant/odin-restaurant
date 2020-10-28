function generateContactContent() {
    var element = document.createElement('div');
    element.innerHTML = `
        <div id="contact-container">
            <div>
                <h2>Contact Us</h2>
                <form>
                    <div id="halved">
                        <div>
                            <label>First Name*</label>
                            <input type="text"/>
                        </div>
                        
                        <div>
                            <label>Last Name*</label>
                            <input type="text"/>                        
                        </div>
                    </div>
                    
                    <p>
                        <label>Email*</label>
                        <input type="email"/>
                    </p>
                    
                    <p>
                        <label>Contact number*</label>
                        <input type="number"/>
                    </p>
                    
                    <p>
                        <label>Message*</label>
                        <textarea maxlength="500" rows="5"></textarea>
                    </p>
                    
                    <p>
                        <button type="button">Send Message</button>
                    </p>
                </form>
            </div>
            
            <div id="map-container">
                <div style="overflow:hidden;width: 100%;position: relative;"><iframe width="100%" height="300px" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/es/">Embedgooglemaps.com/es/</a> & <a href="https://www.hostsearch.com/">web traffic Geeks</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div>
            </div>
        </div>
    `;
    
    return element;
}

export default generateContactContent
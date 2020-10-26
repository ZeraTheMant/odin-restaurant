function generateHomeContent() {
    var element = document.createElement('div');
    
    element.innerHTML = ` 
        <h1>My restaurant</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/557px-Barbieri_-_ViaSophia25668.jpg"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec gravida sollicitudin urna nec varius. 
            Curabitur sed orci in est finibus vulputate. Maecenas pretium dolor in diam ullamcorper egestas. 
            Nam eu velit lorem. 
            Vivamus sodales laoreet luctus. Pellentesque ac ullamcorper dolor. 
            Mauris enim augue, auctor at lorem ac, 
            hendrerit interdum nibh. Sed venenatis libero non facilisis vestibulum.
        </p>
    `;
    
    return element;
}

export default generateHomeContent
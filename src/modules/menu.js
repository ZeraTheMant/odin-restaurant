function generateMenuContent() {
    var element = document.createElement('div');
    element.innerHTML = `
        <div id="menu-container">
            <div class="menu-item">
                <img src="https://feelgoodfoodie.net/wp-content/uploads/2019/12/Lebanese-Spicy-Potatoes-Batata-Harra-5-500x500.jpg" class="menu-item-img"/>
                <h3 class="menu-item-name">Spicy potato</h3>
                <p class="menu-item-price">$12.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>
            </div>
            
            <div class="menu-item">
                <img src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg" class="menu-item-img"/>
                <h3 class="menu-item-name">Pasta</h3>
                <p class="menu-item-price">$15.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>                
            </div>

            <div class="menu-item">
                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/28/2/TM1A14F_Garlic-Bread_s4x3.jpg.rend.hgtvcom.616.462.suffix/1433523400627.jpeg" class="menu-item-img"/>
                <h3 class="menu-item-name">Garlic Bread</h3>  
                <p class="menu-item-price">$13.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>                
            </div>   

            <div class="menu-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/398px-Nachos-cheese.jpg" class="menu-item-img"/>
                <h3 class="menu-item-name">Nachos</h3>  
                <p class="menu-item-price">$5.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>                  
            </div>

            <div class="menu-item">
                <img src="https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/11/tomato-soup-recipes.jpg" class="menu-item-img"/>
                <h3 class="menu-item-name">Tomato Soup</h3>     
                <p class="menu-item-price">$7.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>                  
            </div>

            <div class="menu-item">
                <img src="https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023-500x500.jpg" class="menu-item-img"/>
                <h3 class="menu-item-name">Grilled salmon</h3>    
                <p class="menu-item-price">$25.00</p>
                <button class="menu-item-add-to-cart-btn">Add to cart</button>                  
            </div>            
        </div>
    `;
    
    return element;
}

export default generateMenuContent
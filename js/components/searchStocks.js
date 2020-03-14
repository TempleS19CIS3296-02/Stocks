function searchStocks(id){
    
    var content = `

    <div id="homeIntro">
        Welcome to the stock search page, here you can look up a stock by its ticker symbol. (Example: for Apple Inc. use AAPL)
    
   </br> Stock Symbol: <input type="text" id="searchTicker"/>
         
           <input type="button" value="Submit"/>

</div>
    
    
    
    
    `;
    
    
    document.getElementById(id).innerHTML = content;
    
}

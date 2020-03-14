
function helpPage(id){


var content = `

<div id="masterHelpDiv">
    <div class="helpTab">
        How to Search for a stock?
        <div class="inTabText">
            The way to search for a stock is to click on the magnifying glass in the navigation bar. This will take you
            to another page with a search box. In the search box, search a stock that you would like to know the prediction for
            and click the search button. The graph and information about the stock will display.
        </div>
    </div>

    <div class="helpTab">
        How to see what's trending?
        <div class="inTabText">
            The way to find the stocks that are trending is to click on the graph icon in the navigation bar. This will give a list of
            some blue chip stocks that trending for the day. Once you click on a stock from the list, you will be navigated to a page that
            displays a graph with the predicted stock price and some information about the company.
        </div>
    </div>

    <div class="helpTab">
        How to view your profile?
        <div class="inTabText">
            To view your profile click on the profile icon in the navigation bar. The profile page will display all the stocks that you have
            invested virtual money in, the amount of money you have, the amount of profit that you have made for the day, your profile picture,
            and basic profile information, including email, username, etc.
        </div>
    </div>

    <div class="helpTab">
        How to read the graph?
        <div class="inTabText">
            The graph displays a trend with two different colored lines. The blue line is how the stock has been trending in the past, based on
            that data a red line continues the trend and shows the predicted movement. Also, it shows the confidence with which the application
            believes the prediction to be correct.
        </div>
    </div>
</div>

<div id="contactBox">

    Most of the answers to your questions can be found in the FAQs section of this page. However, if that is not the case then we are here to
    assist you with any other questions. Send us an email at example@temple.edu and we will get back to you as soon as possible. Make sure to
    put the question in the subject line and give a brief description of the problem that troubles you. One of our support team members will
    respond to the email as soon as they can. We thank you for your patience.

</div>

        `;

        document.getElementById(id).innerHTML = content;
}
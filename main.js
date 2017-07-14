function getQuote () {
    $.ajax({
        headers: {
            "X-Mashape-Key": "64FTTI04D2mshaRttF8qQOcANNxgp1Ed0XyjsncoZZnsGWmc5G",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
        success: function (response) {
            var quote = response.quote;
            var author = response.author;

            $('.quote-content').html('<p id="quote-text"><i class="fa fa-quote-left"></i> ' + quote + ' <i class="fa fa-quote-right"></i></p>');
            $('.quote-author').html('<span class="author-name" id="author">- <em>' + author + '</em></span>')
        }
    });
}

$(document).ready(function () {
    getQuote()
    
    $("#new-quote").on("click", function () {
        getQuote()
    });

    $("#twitter-button").on("click", function () {
        var currentQuote = document.getElementById("quote-text").innerText
        var currentAuthor = document.getElementById("author").innerText
        if(currentQuote.length + currentAuthor.length + 11 <= 140) {
            open(url='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="' + currentQuote + '" ' + currentAuthor)
        } else {
            alert("Sorry, this quote is too long post to Twitter, please try another.")
        }
    })
});
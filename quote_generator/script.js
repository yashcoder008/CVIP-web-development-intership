const Quotes={
    "William Shakespeare":"All the world’s a stage, and all the men and women merely players",
    "Thomas Edison":"Genius is one percent inspiration and ninety-nine percent perspiration",
    "Martin Luther King":"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character",
    "Sir Francis Bacon":"Knowledge is power",
    "Albert Einstein":"Life is like riding a bicycle. To keep your balance, you must keep moving",
    "the Bible":"The truth will set you free",
    "Friedrich Nietzsche":"What doesn't kill us makes us stronger",
    "Abraham Lincoln	":"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time",
    "Mahatma Ghandi":"You must be the change you wish to see in the world",
    "Jennifer Aniston":"Friends are the family we choose.",
    " Jim Rohn":"Happiness is not by chance but by choice"
}


let keys=Object.keys(Quotes);


function ChangeQuote()
{
    const randomCreator=keys[Math.floor(Math.random()*keys.length)];
    const randomQuote=Quotes[randomCreator];
    document.querySelector(".quote").innerHTML=`<p>&ldquo;${randomQuote} &#8222;</p>`

    document.querySelector('.creator').innerHTML=`<p>&#8210;${randomCreator};</p>`
}
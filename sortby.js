
document.querySelector("#filterCoding").addEventListener("change", filterCoding);
document.querySelector("#filterDesign").addEventListener("change", filterDesign);
document.querySelector("#filterMarketing").addEventListener("change", filterMarketing);




const btn = document.querySelector(".load-more-btn")

function filterCoding() {
    document.querySelector("#filter-marketing").classList.remove('active');
    document.querySelector("#filter-design").classList.remove('active');
    document.querySelector("#filter-coding").classList.add('active');

    hideAllCards();

  
    if(document.querySelector("#filterCoding").checked) {
        
        console.log(btn)
        
        
    var codingCards = document.querySelectorAll(".coding")
    codingCards.forEach(card => {
        card.style.display = "inline-block"
    })
   

    document.querySelector("#filterMarketing").checked = false
    document.querySelector("#filterDesign").checked = false
    } else {
        showAllCards()
    document.querySelector("#filter-coding").classList.remove('active');

    }

    
}

function filterDesign() {
    document.querySelector("#filter-marketing").classList.remove('active');
    document.querySelector("#filter-coding").classList.remove('active');
    document.querySelector("#filter-design").classList.toggle('active');

    hideAllCards();


    if(document.querySelector("#filterDesign").checked) {
        var designCards = document.querySelectorAll(".design")
        designCards.forEach(card => {
            card.style.display = "inline-block"
        })
   
        document.querySelector("#filterMarketing").checked = false
        document.querySelector("#filterCoding").checked = false
        } else {
            showAllCards()
           
       
        }
    

}

function filterMarketing() {
    document.querySelector("#filter-coding").classList.remove('active');
    document.querySelector("#filter-design").classList.remove('active');
    document.querySelector("#filter-marketing").classList.toggle('active');

    hideAllCards();

    if(document.querySelector("#filterMarketing").checked) {
        var marketingCards = document.querySelectorAll(".marketing")
        marketingCards.forEach(card => {
            card.style.display = "inline-block"
        })
      
        document.querySelector("#filterCoding").checked = false
        document.querySelector("#filterDesign").checked = false
        } else {
            showAllCards()
         
       
        }
}


function hideAllCards() {
    var allCards = document.querySelectorAll(".card");  

    allCards.forEach(card => {
        card.style.display = "none";
    });
}


function showAllCards() {
    var allCards = document.querySelectorAll(".card");  

    allCards.forEach(card => {
        card.style.display = "inline-block";
    });
}



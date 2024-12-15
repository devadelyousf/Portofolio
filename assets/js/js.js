
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

document.getElementById("sendToWhatsApp").addEventListener("click", function () {
    // Get user input values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input
    if (!name || !phone || !message) {
        alert("Please fill out all fields!");
        return;
    }

    // Construct the WhatsApp URL
    const recipientPhone = "+201129427799"; 
    const encodedMessage = encodeURIComponent(
        `Hello, my name is ${name}. My email is ${email}. Message: ${message}`
    );
    const whatsappURL = `https://wa.me/${recipientPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
});



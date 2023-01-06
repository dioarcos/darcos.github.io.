;(function($){
    "use strict"
    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
    /*----------------------------------------------------*/
    /*  Slkills
    /*----------------------------------------------------*/
    $(function () {
        $(".counter").counterUp({
            delay: 10,
            time: 2000,
        });
    });
    /*----------------------------------------------------*/
    /*  Validate
    /*----------------------------------------------------*/
    $.validate({
        modules: 'sanitize',
        lang: 'es',
    });

})(jQuery)

    /*----------------------------------------------------*/
    /*  Send mails
    /*----------------------------------------------------*/
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){
        e.preventDefault();
        let names = document.forms[0].names.value;
        let email = document.forms[0].email.value;
        let subject = document.forms[0].subject.value;
        let message_text = document.forms[0].message_text.value;
        fetches(names, email, subject, message_text);

    }
        
    const fetches = (names, email, subject, message_text) =>{
       
        Email.send({
            SecureToken : "ddd0f249-5e42-4787-aa2c-22cd27484487",
            To : 'dioarcos@gmail.com',
            From : "dioarcos@gmail.com",
            Subject : "pruebas 21",
            Body :  "esto va por que va"
        }).then(
            message => createAlert('','Excelente, Gracias por escribir!','Pronto me pondre en contacto','success',true,true,'pageMessages')
        );
        
    };

    /*----------------------------------------------------*/
    /*  Alerts
    /*----------------------------------------------------*/
    function createAlert(title, summary, details, severity, dismissible, autoDismiss, appendToId) {
        //mapa de iconos
        var iconMap = {
            info: "fa fa-info-circle",
            success: "fa fa-thumbs-up",
            warning: "fa fa-exclamation-triangle",
            danger: "fa ffa fa-exclamation-circle"
        };

        var iconAdded = false;

        var alertClasses = ["alert", "animated", "flipInX"];
        alertClasses.push("alert-" + severity.toLowerCase());

        if (dismissible) {
            alertClasses.push("alert-dismissible");
        }

        var msgIcon = $("<i />", {
            "class": iconMap[severity] // you need to quote "class" since it's a reserved keyword
        });

        var msg = $("<div />", {
            "class": alertClasses.join(" ") // you need to quote "class" since it's a reserved keyword
        });

        if (title) {
            var msgTitle = $("<h4 />", {
                html: title
            }).appendTo(msg);

            if (!iconAdded) {
                msgTitle.prepend(msgIcon);
                iconAdded = true;
            }
        }

        if (summary) {
            var msgSummary = $("<strong />", {
                html: summary
            }).appendTo(msg);

            if (!iconAdded) {
                msgSummary.prepend(msgIcon);
                iconAdded = true;
            }
        }

        if (details) {
            var msgDetails = $("<p />", {
                html: details
            }).appendTo(msg);

            if (!iconAdded) {
                msgDetails.prepend(msgIcon);
                iconAdded = true;
            }
        }


        if (dismissible) {
            var msgClose = $("<span />", {
                "class": "close", // you need to quote "class" since it's a reserved keyword
                "data-dismiss": "alert",
                html: "<i class='fa fa-times-circle'></i>"
            }).appendTo(msg);
        }

        $('#' + appendToId).prepend(msg);

        if (autoDismiss) {
            setTimeout(function () {
                msg.addClass("flipOutX");
                setTimeout(function () {
                    msg.remove();
                }, 1000);
            }, 5000);
        }
    }
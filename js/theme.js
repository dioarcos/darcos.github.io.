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
        if (names.trim().length > 0 && email.trim().length > 0 && subject.trim().length > 0 && message_text.trim().length > 0 ) {
            document.getElementById("submitButton").setAttribute("disabled", true);
            fetches(names, email, subject, message_text);
        }else {
            let message = 'Existen campos vacios' 
            createAlert('',true,true,'pageMessages',message)
        }
    }
        
    const fetches = (names, email, subject, message_text) =>{
        Email.send({
            SecureToken : "ddd0f249-5e42-4787-aa2c-22cd27484487",
            To : 'dioarcos@gmail.com',
            From : 'dioarcos@gmail.com',
            Subject : "Un nuevo trabajo !!",
            Body :'Email : ' + email + ' Nombre : ' + names +', subjewct : '+ subject + ', mensaje :' +message_text
        }).then(
            //message => message
            message => createAlert('',true,true,'pageMessages',message)
        );
    };

    /*----------------------------------------------------*/
    /*  Alerts
    /*----------------------------------------------------*/
    function createAlert(title, dismissible, autoDismiss, appendToId, message ) {
        console.log(message);
        //mapa de iconos
        var iconMap = {
            info: "fa fa-info-circle",
            success: "fa fa-thumbs-up",
            warning: "fa fa-exclamation-triangle",
            danger: "fa ffa fa-exclamation-circle"
        };

        var iconAdded = false;

        if (message == 'OK'){
            severity = 'success';
            summary = 'Excelente, Gracias por escribir!';
            details = 'Pronto me pondre en contacto';
            $('#names').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#message_text').val('');
            document.getElementById("submitButton").disabled = false;
        }else {
            severity = 'danger';
            summary = 'Opps!! , Algo salió mal'
            details = message ;
            document.getElementById("submitButton").disabled = false;
            
        }

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
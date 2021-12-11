
    var Certib = document.getElementsByClassName("certib");
    var Certipic = document.getElementsByClassName("certipicrange");
    
    
    for (var i = 0; i < Certib.length; i++) {
        Certib[i].index=i;
        Certib[i].onclick = function () {
        for (var j = 0; j < Certib.length; j++) {
            Certib[j].className = 'certib '; 
            Certipic[j].className = 'certipicrange ';
        }
        this.className += 'acti';
        Certipic[this.index].className += 'show';
        };
    }

    var Portb = document.getElementsByClassName("portb");
    var Portpic = document.getElementsByClassName("portpicrange");


    for (var k = 0; k < Portb.length; k++) {
        Portb[k].index=k;
        Portb[k].onclick = function () {
        for (var l = 0; l < Portb.length; l++) {
            Portb[l].className = 'portb '; 
            Portpic[l].className = 'portpicrange ';
        }
        this.className += 'actiport';
        Portpic[this.index].className += 'show';
        };
    }

    var Expeb = document.getElementsByClassName("expeb");
    var Expepic = document.getElementsByClassName("expepicrange");


    for (var m = 0; m < Expeb.length; m++) {
        Expeb[m].index=m;
        Expeb[m].onclick = function () {
        for (var n = 0; n < Expeb.length; n++) {
            Expeb[n].className = 'expeb '; 
            Expepic[n].className = 'expepicrange ';
        }
        this.className += 'actiexpe';
        Expepic[this.index].className += 'show';
        };
    }

    var acc = document.getElementsByClassName("projectbut");

    for (var a = 0; a < acc.length; a++) {
        acc[a].addEventListener("click", function() {
            this.classList.toggle("active");
            var projectrange = this.nextElementSibling;
            if (projectrange.style.maxHeight) {
                projectrange.style.maxHeight = null;
            } 
            else {
                projectrange.style.maxHeight = projectrange.scrollHeight + "px";
            } 
        });
    }

    var slideIndex = [1,1];
    var slideId = ["mySlides1", "mySlides2"]
    showSlides(1, 0);
    showSlides(1, 1);

    function plusSlides(c, no) {
    showSlides(slideIndex[no] += c, no);
    }

    function showSlides(c, no) {
    var b;
    var x = document.getElementsByClassName(slideId[no]);
    if (c > x.length) {slideIndex[no] = 1}    
    if (c < 1) {slideIndex[no] = x.length}
    for (b = 0; b < x.length; b++) {
        x[b].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
    }

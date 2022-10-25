document.getElementById("header-container").innerHTML = `
    <div>
        <img src="img/logo temporal.png" usemap="#logomap" id="header-logo" alt="Logo Pet House">
        <map name="logomap">
            <area shape="circle" coords="66,66,66" href="index.html"/>
        </map>
    </div>
    <div class="search-container">
        <form action="#">
            <input type="text" placeholder="Search.." id="input-search">
            <button type="submit" id="button-search"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <div class="header-buttons"> 
        <a href="login.html"><button class="button btn-transition">
        <span class="font-title">LOGIN</span>
        <svg>
            <rect x="0" y="0" fill="none"></rect>
        </svg>
        </button></a>
        <a href="signup.html"><button class="button btn-transition">
        <span class="font-title">SIGN UP!</span>         
        <svg>
            <rect x="0" y="0" fill="none"></rect>
        </svg>
        </button></a>
    </div>  `

document.getElementById("navbar").innerHTML=`
    <input type="checkbox" id="toggler">
    <label for="toggler"><i class="ri-menu-line"></i></label>
    <div class="navbar-menu">
    <a href="aboutus.html" class="navbar-item font-title">ABOUT US</a>     
    <div class="dropdown">
    <button class="dropbtn navbar-item font-title">ADOPT ME! 
        <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="puppies.html">PUPPIES</a>
        <a href="kitties.html">KITTIES</a>
    </div>   
    </div> 
    <a href="donations.html" class="navbar-item font-title">DONATIONS</a>
    <a href="FAQs.html" class="navbar-item font-title">FAQS</a>
    <a href="contactus.html" class="navbar-item font-title">CONTACT US</a>
    <div class="navbar-buttons"> 
    <a href="login.html" class="font-title">LOGIN</a>         
    <a href="#" class="font-title">SIGN UP!</a>
    </div>
    </div>`


document.getElementById("footer").innerHTML=`
    <div class="grupo-1">
    <div class="box">
        <img src="img/logo temporal.png" usemap="#logomap" id="logo">
            <map name="logomap">
            <area shape="circle" coords="66,66,66" href="../maqueta/index.html"/>
            </map>
            <br><br>
        <h2>CONTACT US</h2>
        <h2>Tel: (+54) 9 1212121212</h2>
        <h2>contact@pethouse.com</h2>
    </div>
    <div class="box">
        <h2>FIND US</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.907709981955!2d-58.43782248511291!3d-34.60649516515139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca688994eb61%3A0xd055df0a7dafa86e!2sParque%20Centenario!5e0!3m2!1ses-419!2sar!4v1663418554258!5m2!1ses-419!2sar" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="box">
        <h2>FOLLOW US</h2>
        <div class="red-social">
            <a href="https://facebook.com/" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
            <a href="https://twitter.com/" class="fa fa-twitter"></a>
            <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
        </div>
    </div>
    </div>
    <div class="grupo-2">
    <small>&copy; 2022 <b>PET HOUSE</b> - Todos los Derechos Reservados.</small>
    </div>`


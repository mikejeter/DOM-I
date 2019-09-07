const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let menuItems = document.querySelectorAll("a");

menuItems[0].setAttribute('class', '.nav-item-1')
menuItems[0].innerText = "Service";

menuItems[1].setAttribute('class', '.nav-item-2')
menuItems[1].innerText = "Product";

menuItems[2].setAttribute('class', '.nav-item-3')
menuItems[2].innerText = "Vision";

menuItems[3].setAttribute('class', '.nav-item-4')
menuItems[3].innerText = "Features";

menuItems[4].setAttribute('class', '.nav-item-5')
menuItems[4].innerText = "About";

menuItems[5].setAttribute('class', '.nav-item-6')
menuItems[5].innerText = "Contact";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

let headerText = document.querySelector("h1");
headerText.append(siteContent["cta"]["h1"])

let buttonText = document.querySelector("button");
buttonText.append(siteContent["cta"]["button"])

let mainContent = document.querySelectorAll(".text-content");

mainContent[0].querySelector('h4').textContent = siteContent['main-content']["features-h4"]
mainContent[0].querySelector('p').textContent = siteContent['main-content']["features-content"]

mainContent[1].querySelector('h4').textContent = siteContent['main-content']["about-h4"]
mainContent[1].querySelector('p').textContent = siteContent['main-content']["about-content"]

mainContent[2].querySelector('h4').textContent = siteContent['main-content']["services-h4"]
mainContent[2].querySelector('p').textContent = siteContent['main-content']["services-content"]

mainContent[3].querySelector('h4').textContent = siteContent['main-content']["product-h4"]
mainContent[3].querySelector('p').textContent = siteContent['main-content']["product-content"]

mainContent[4].querySelector('h4').textContent = siteContent['main-content']["vision-h4"]
mainContent[4].querySelector('p').textContent = siteContent['main-content']["vision-content"]

let centerImage = document.getElementById("middle-img");
centerImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let address = document.querySelector(".contact");

address.getElementsByTagName('h4')[0].innerText = siteContent['contact']['contact-h4'];
address.getElementsByTagName('p')[0].innerText = siteContent['contact']['address'];
address.getElementsByTagName('p')[1].innerText = siteContent['contact']['phone'];
address.getElementsByTagName('p')[2].innerText = siteContent['contact']['email'];

let footer = document.querySelector("footer");
footer.getElementsByTagName('p')[0].innerText = siteContent['footer']['copyright']
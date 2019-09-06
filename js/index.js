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

let menuItems1 = document.querySelector("a");
menuItems1.append(siteContent["nav"]["nav-item-1"])

let menuItems2 = document.querySelector("a");
menuItems2.append(siteContent["nav"]["nav-item-2"])

let menuItems3 = document.querySelector("a");
menuItems3.append(siteContent["nav"]["nav-item-3"])

let menuItems4 = document.querySelector("a");
menuItems4.append(siteContent["nav"]["nav-item-4"])

let menuItems5 = document.querySelector("a");
menuItems5.append(siteContent["nav"]["nav-item-5"])

let menuItems6 = document.querySelector("a");
menuItems6.append(siteContent["nav"]["nav-item-6"])

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

let headerText = document.querySelector("h1");
headerText.append(siteContent["cta"]["h1"])

let buttonText = document.querySelector("button");
buttonText.append(siteContent["cta"]["button"])

let topFeature = document.querySelector("h4");
topFeature.append(siteContent["main-content"]["features-h4"])

let topParagraph = document.querySelector("p");
topParagraph.append(siteContent["main-content"]["features-content"])

let topAbout = document.querySelector("h4");
topAbout.append(siteContent["main-content"]["about-h4"])

let aboutParagraph = document.querySelector("p");
aboutParagraph.append(siteContent["main-content"]["about-content"])

let centerImage = document.getElementById("middle-img");
centerImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomServices = document.querySelector("h4");
bottomServices.append(siteContent["main-content"]["services-h4"])
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
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = "img/logo.png";

let nav = document.querySelector("nav");

let navItem1 = nav.querySelector("a");
let navItem2 = navItem1.nextElementSibling;
let navItem3 = navItem2.nextElementSibling;
let navItem4 = navItem3.nextElementSibling;
let navItem5 = navItem4.nextElementSibling;
let navItem6 = navItem5.nextElementSibling;

navItem1.textContent = "Services";
navItem2.textContent = "Product";
navItem3.textContent = "Vision";
navItem4.textContent = "Features";
navItem5.textContent = "About";
navItem6.textContent = "Contact";

let ctaText = document.querySelector(".cta-text");
let ctaTitle = ctaText.querySelector("h1");
let buttonText = ctaText.querySelector("button");
let ctaImage = document.querySelector("#cta-img");

ctaTitle.innerHTML = "DOM <br> IS <br> AWESOME"
buttonText.textContent = "Get Started";
ctaImage.src = "img/header-img.png";

let topContent = document.querySelector(".top-content");
let featuresMain = topContent.querySelector(".text-content");
let featuresTitle = featuresMain.querySelector("h4");
let featuresContent = featuresMain.querySelector("p");

let aboutMain = featuresMain.nextElementSibling;
let aboutTitle = aboutMain.querySelector("h4");
let aboutContent = aboutMain.querySelector("p");

featuresTitle.textContent = "Features";
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

aboutTitle.textContent = "About";
aboutContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.querySelector("#middle-img");

middleImg.src = "img/mid-page-accent.jpg";

let bottomContent = document.querySelector(".bottom-content");

let servicesMain = bottomContent.querySelector(".text-content");
let servicesTitle = servicesMain.querySelector("h4");
let servicesContent = servicesMain.querySelector("p");

servicesTitle.textContent = "Services";
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productMain = servicesMain.nextElementSibling;
let productTitle = productMain.querySelector("h4");
let productContent = productMain.querySelector("p");

productTitle.textContent = "Product";
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionMain = productMain.nextElementSibling;
let visionTitle = visionMain.querySelector("h4");
let visionContent = visionMain.querySelector("p");

visionTitle.textContent = "Vision";
visionContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contact = document.querySelector(".contact")
let contactTitle = contact.querySelector("h4");
let address = contactTitle.nextElementSibling;
let phone = address.nextElementSibling;
let email = phone.nextElementSibling;

contactTitle.textContent = "Contact"
address.innerHTML = "123 Way 456 Street <br> Somewhere, USA";
phone.textContent = "1 (888) 888-8888";
email.textContent = "sales@greatidea.io";

let footer = document.querySelector("footer")
let copyright = footer.querySelector("p");

copyright.textContent = "Copyright Great Idea! 2018";

navItem1.style.color = "green";
navItem2.style.color = "green";
navItem3.style.color = "green";
navItem4.style.color = "green";
navItem5.style.color = "green";
navItem6.style.color = "green";

let blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);

let domLink = document.createElement("a");
domLink.textContent = "DOM";
domLink.href = "#";
document.querySelector("a").prepend(domLink);

blogLink.style.color = "green";
domLink.style.color = "green";

let newButton = document.createElement("button");

newButton.textContent = "Click Me!";
document.querySelector(".cta-text").appendChild(newButton);

newButton.onclick = function (event) {
  newButton.style.color = "red";
}

newButton.addEventListener("click", event => {
  buttonText.style.color = "green";
})


/* ===================================
FAST NEWS - JAVASCRIPT FILE
=================================== */

/* ---------- Get Page Elements ---------- */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

const darkModeBtn = document.getElementById("darkModeBtn");

const scrollTopBtn = document.getElementById("scrollTopBtn");

const newsSearch = document.getElementById("newsSearch");
const searchBtn = document.getElementById("searchBtn");

const newsletterForm = document.getElementById("newsletterForm");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

/* ===================================
MOBILE MENU
=================================== */

if (menuBtn && navbar) {

```
menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";

    }

});
```

}

/* Close mobile menu after clicking a link */

if (navbar) {

```
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

        if (menuBtn) {

            menuBtn.innerHTML = "☰";

        }

    });

});
```

}

/* ===================================
DARK MODE
=================================== */

/* Check saved dark mode setting */

const savedTheme = localStorage.getItem("fastNewsTheme");

if (savedTheme === "dark") {

```
document.body.classList.add("dark-mode");

if (darkModeBtn) {

    darkModeBtn.innerHTML = "☀️";

    darkModeBtn.setAttribute(
        "aria-label",
        "Disable dark mode"
    );

}
```

}

/* Dark mode button */

if (darkModeBtn) {

```
darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    /* Check current theme */

    if (document.body.classList.contains("dark-mode")) {

        darkModeBtn.innerHTML = "☀️";

        darkModeBtn.setAttribute(
            "aria-label",
            "Disable dark mode"
        );

        localStorage.setItem(
            "fastNewsTheme",
            "dark"
        );

    } else {

        darkModeBtn.innerHTML = "🌙";

        darkModeBtn.setAttribute(
            "aria-label",
            "Enable dark mode"
        );

        localStorage.setItem(
            "fastNewsTheme",
            "light"
        );

    }

});
```

}

/* ===================================
SCROLL TO TOP BUTTON
=================================== */

if (scrollTopBtn) {

```
window.addEventListener("scroll", function () {

    if (window.scrollY > 350) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
```

}

/* ===================================
NEWS SEARCH
=================================== */

/* Search function */

function searchNews() {

```
if (!newsSearch) {

    return;

}


const searchText = newsSearch.value
    .toLowerCase()
    .trim();


const newsCards = document.querySelectorAll(
    ".news-card"
);


let resultFound = false;


newsCards.forEach(function (card) {

    const cardText = card.textContent
        .toLowerCase();


    if (cardText.includes(searchText)) {

        card.style.display = "block";

        resultFound = true;

    } else {

        card.style.display = "none";

    }

});


/* Show search message */

let searchMessage = document.getElementById(
    "searchMessage"
);


if (!searchMessage) {

    searchMessage = document.createElement("p");

    searchMessage.id = "searchMessage";

    searchMessage.style.textAlign = "center";

    searchMessage.style.marginTop = "20px";

    searchMessage.style.fontWeight = "600";


    const searchSection = document.querySelector(
        ".search-section .container"
    );


    if (searchSection) {

        searchSection.appendChild(
            searchMessage
        );

    }

}


/* Search result message */

if (searchText === "") {

    searchMessage.textContent = "";

    newsCards.forEach(function (card) {

        card.style.display = "block";

    });

} else if (resultFound) {

    searchMessage.textContent =
        "News results found for: " +
        newsSearch.value;

} else {

    searchMessage.textContent =
        "No news articles were found.";

}
```

}

/* Search button */

if (searchBtn) {

```
searchBtn.addEventListener(
    "click",
    searchNews
);
```

}

/* Search when Enter key is pressed */

if (newsSearch) {

```
newsSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchNews();

        }

    }
);
```

}

/* ===================================
NEWSLETTER FORM
=================================== */

if (newsletterForm) {

```
newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const emailInput =
            newsletterForm.querySelector(
                'input[type="email"]'
            );


        if (!emailInput) {

            return;

        }


        const email =
            emailInput.value.trim();


        /* Simple email validation */

        if (
            email === "" ||
            !email.includes("@") ||
            !email.includes(".")
        ) {

            alert(
                "Please enter a valid email address."
            );

            emailInput.focus();

            return;

        }


        alert(
            "Thank you! You have successfully subscribed to Fast News."
        );


        newsletterForm.reset();

    }
);
```

}

/* ===================================
CONTACT FORM VALIDATION
=================================== */

if (contactForm) {

```
contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        /* Check empty fields */

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            if (formMessage) {

                formMessage.textContent =
                    "Please fill in all fields.";

                formMessage.style.color =
                    "#e11d48";

            }

            return;

        }


        /* Email validation */

        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            if (formMessage) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color =
                    "#e11d48";

            }

            return;

        }


        /* Minimum message length */

        if (message.length < 10) {

            if (formMessage) {

                formMessage.textContent =
                    "Your message must contain at least 10 characters.";

                formMessage.style.color =
                    "#e11d48";

            }

            return;

        }


        /* Success message */

        if (formMessage) {

            formMessage.textContent =
                "Thank you, " +
                name +
                "! Your message has been sent successfully.";

            formMessage.style.color =
                "#15803d";

        }


        /* Reset form */

        contactForm.reset();

    }
);
```

}

/* ===================================
ACTIVE NAVIGATION LINK
=================================== */

const currentPage = window.location.pathname
.split("/")
.pop();

if (navbar) {

```
const allNavLinks =
    navbar.querySelectorAll("a");


allNavLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href")
        .split("/")
        .pop();


    if (
        currentPage === linkPage
    ) {

        allNavLinks.forEach(
            function (navLink) {

                navLink.classList.remove(
                    "active"
                );

            }
        );


        link.classList.add(
            "active"
        );

    }

});
```

}

/* ===================================
WEBSITE LOADED MESSAGE
=================================== */

console.log(
"Fast News website loaded successfully!"
);

function opentab(tabId) {
    // Hide all lists
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => list.style.display = 'none');

    // Show the selected list
    const selectedList = document.getElementById(tabId);
    if (selectedList) {
        selectedList.style.display = 'block';
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  //prevent directly goin to the section
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// -----------------form---------------------



// Access form elements
const nameNode = document.getElementById("name");
const emailNode = document.getElementById("email");
const messageNode = $("#message");


const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = $("#errorMessage");

const invalidBorder = "4px solid red";
const validBorder = "4px solid green";

const namePattern = /^[A-Za-z ]*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


nameNode.addEventListener('keyup',() => validate1())
emailNode.addEventListener('keyup',() => validate2())
messageNode.on("keyup",validate3)


// Validate Name
function validate1() {
    const name = nameNode.value; // Extract value
    errorName.textContent = ""; // Clear previous errors

    if (name === "") {
        errorName.textContent = "Name is required";
        nameNode.style.border = invalidBorder;
        return false;
    } else if (!namePattern.test(name)) {
        errorName.textContent = "Only alphabets and spaces are allowed";
        nameNode.style.border = invalidBorder;
        return false ;
    } else {
        nameNode.style.border = validBorder;
        return true;
    }
}

// Validate Email
function validate2() {
    const email = emailNode.value; // Extract value
    errorEmail.textContent = ""; // Clear previous errors

    if (email === "") {
        errorEmail.textContent = "Email is required";
        emailNode.style.border = invalidBorder;
        return false;
    } else if (!emailPattern.test(email)) {
        errorEmail.textContent = "Enter a valid email address";
        emailNode.style.border = invalidBorder;
        return false ;
    } else {
        emailNode.style.border = validBorder;
        return true;
    }
}


// Validate Message with Jquery


function validate3() {
    const message = messageNode.val();
    console.log(message)
    errorMessage.text("");
    // messageNode.css("border", validBorder);

    if (message === "") {
        errorMessage.text("Message is required");
        messageNode.css("border", invalidBorder);
        return false;
    } else if (message.length < 1) {
        errorMessage.text("Message must be at least 10 characters long");
        messageNode.css("border", invalidBorder);
        return false;
    } else {
        messageNode.css("border", validBorder);
        return true;
    }
}






function validateAll(){
    const state1 = validate1()
    const state2 = validate2()
    const state3 = validate3()

    if (state1 && state2 && state3){
        window.alert("Form Submitted Sucessfully") 
    }
    return (state1 && state2 && state3)
}


// -------------------------------------------

const scrollUpBtn = document.querySelector('.scrlup-btn');

// Show or hide the scroll-up button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // When scrolled down 100px
        // Show the button
        scrollUpBtn.classList.remove('hidden');
    } else {
        // Hide the button when at the top of the page
        scrollUpBtn.classList.add('hidden');
    }
});

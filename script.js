"use strict"

document.addEventListener("DOMContentLoaded", () => {
    //get elements
    const navtoggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");
    const scrollBtn = document.querySelector(".topScrollBtn");
    const header = document.querySelector("header");
    const modalBox = document.querySelector("#modalBox");
    const modalOverlay = document.querySelector("#overlay");
    const closeModal = document.querySelector(".closeModal");
    const modalForm = document.getElementById("modalForm");
    const modalError = document.getElementById("modalError");
    const indexpage = document.getElementById("indexpage");
    const modalKey = "ModalDate";
 
    // save the current date the modal was interacted with.
    // SAVE MODAL DATE

    function saveModalDate() {
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem(modalKey, today);
    };

    /* Helper functions */
    //SHOW MODAL 
    function showModalBox() {
        modalOverlay.classList.remove("hidden");
    }; 
    
    // CLOSE MODAL
    function closeModalBox() {
        modalOverlay.classList.add("hidden");
        saveModalDate();
    };

    // show modal on page load with a little delay
    //GET SAVED DATE
    const savedDate = localStorage.getItem(modalKey)
     //GET TODAY DATE
    const today = new Date().toISOString().split("T")[0];
    // CHECK IF SAVED DATE IS NOT THE SAME AS TODAY DATE
    if (savedDate !== today) {
     setTimeout(showModalBox, 2000)
 }
     

    //open or close ul links
    navtoggle.addEventListener("click", () => {
        links.classList.toggle("show-links")
    });
    
    // listening for click event
    document.addEventListener("click", (e) => {
        //close ul when user clicks outside ul && NOT togglebtn
        const ulOpen = links.classList.contains("show-links")
        const clickedToggle = navtoggle.contains(e.target)
        const clickedUl = links.contains(e.target)
        if (ulOpen && !clickedToggle && !clickedUl) {
            links.classList.remove("show-links")
        };

        if (indexpage) {
            
            // close modal when user  click on overlay && NOT modalbox
            if (!modalBox.contains(e.target) && !modalOverlay.classList.contains("hidden")) {
                closeModalBox();
            }
        };
    });
    
    if (indexpage) {
        //CLOSE MODAL BOX
        closeModal.addEventListener("click", () => {
            closeModalBox()
        });
        //handle modal form submit
        modalForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(modalForm);
            const user = Object.fromEntries(formData);

            const { newsletter } = user;

            const cleanedData = {
                email: cleanData(newsletter).toLowerCase()
            };
            
            if (!cleanedData.email) {
                modalError.textContent = "Email is required";
            } else {
                closeModalBox()
                console.log(cleanedData.email)
            }
        })
    }
 


    // clean date
    function cleanData(value) {
        return value.trim();
    };

    window.addEventListener("scroll", () => {
        //add sticky header
        if (window.scrollY > 1500) header.classList.add("stickyHeader");
        else header.classList.remove("stickyHeader");

        //show scroll to top button
        if (window.scrollY > 2000) scrollBtn.classList.add("showScrollBtn");
        else scrollBtn.classList.remove("showScrollBtn");
    });
});
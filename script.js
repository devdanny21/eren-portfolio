const enterScreen = document.getElementById("enter-screen");

enterScreen.addEventListener("click", () => {
    enterScreen.classList.add("entered");

    // Start the website animations
    document.body.classList.add("entered");
});

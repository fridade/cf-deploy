// Function to display a notice (Note: This won't directly work in Cloudflare Workers)
function displayNotice(index) {
    // Cloudflare Workers do not have direct access to the DOM
    // Therefore, this code should be handled on the client side (e.g., in your HTML or browser script)
    if (typeof document !== "undefined") {
        document.getElementsByClassName("in-development")[index].style.display = "block";
    }
}

// Check if the script is running in a browser environment
if (typeof window !== "undefined") {
    window.onload = function() {
        // Initialize Vivus if in a browser environment
        new Vivus("ecosystem-graphic", {
            file: "/images/simulators-graphic.svg",
            duration: 400,
            type: "oneByOne"
        }).play();
    };
} else {
    // Cloudflare Workers context does not execute the above script
    // You might want to add Worker-specific code here if needed
    console.log("This script is running in a Cloudflare Worker context.");
}

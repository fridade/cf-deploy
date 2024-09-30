// Import any required modules or dependencies here
function displayNotice(index) {
    if (typeof document !== "undefined") {
        document.getElementsByClassName("in-development")[index].style.display = "block";
    }
}

// This will ensure Vivus runs only if in a browser environment
if (typeof window !== "undefined") {
    window.onload = function() {
        new Vivus("ecosystem-graphic", {
            file: "/images/simulators-graphic.svg",
            duration: 400,
            type: "oneByOne"
        }).play();
    };
} else {
    // This is the Cloudflare Worker context
    console.log("This script is running in a Cloudflare Worker context.");
}

// Add the Cloudflare Worker event listener for HTTP requests
addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

// A simple request handler function
async function handleRequest(request) {
    // Example: Returning a simple HTML response
    return new Response("Hello, Cloudflare Workers that good Fritzolo1 for the dev!", {
        headers: { "Content-Type": "text/html" },
    });
}

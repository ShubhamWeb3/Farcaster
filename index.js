const express = require("express");
const app = express();

// Define a route to handle GET requests to the root URL
app.get("/", (req, res) => {
  // Set content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Basic HTML with Open Graph meta tags
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple Meta Tags Example</title>
        
        <meta property="og:image" content="https://www.theinterrobang.ca/images/interrobang/030819/B8QC6DAZ9PWRK7M2.jpg">
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="https://www.theinterrobang.ca/images/interrobang/030819/B8QC6DAZ9PWRK7M2.jpg">
        <meta property="fc:frame:button:1" content="specs">
        <meta property="fc:frame:button:1:action" content="link">
        <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec">
        
        <meta property="fc:frame:button:2" content="image">
        <meta property="fc:frame:button:2:action" content="link">
        <meta property="fc:frame:button:2:target" content="https://www.theinterrobang.ca/images/interrobang/030819/B8QC6DAZ9PWRK7M2.jpg">
        
        <meta property="fc:frame:button:3" content="frame validator">
        <meta property="fc:frame:button:3:action" content="link">
        <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
        
        <meta property="fc:frame:button:4" content="replit">
        <meta property="fc:frame:button:4:action" content="link">
        <meta property="fc:frame:button:4:target" content="https://replit.com/@ShubhamWeb3/Farcaster#index.js">
      </head>
      <body>
        <h1>Hello, Meta Tags!</h1>

      </body>
    </html>
  `;

  // Send the HTML response
  res.send(html);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

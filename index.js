/** 
  Generating PDF from Web Page using Puppeteer:
 
  Overview:
  Puppeteer is a Node library that we can use to control a headless Chrome or chromium instance. We are basically using Chrome, but programmatically using JavaScript.
  It allows automated web scraping, testing, and generating PDFs from web pages. Method returns promise.
  
  Installation Requirements:
  - Node.js installed on your system.
  - Puppeteer and readline-sync Node packages installed. You can install them via npm using the following commands:
       npm install puppeteer
       npm install readline-sync
  
  Script Functionality:
  1. User Input: Prompt the user to enter a URL.
  2. Puppeteer Launch: Launch a headless Chrome or Chromium browser instance using Puppeteer.
  3. Navigation: Open a new page and navigate to the URL provided by the user.
  4. PDF Generation: Generate a PDF of the web page with specified options.
  5. Output: Save the generated PDF file to the specified path.
  6. Error Handling: Catch and log any errors that occur during the process.
  7. Browser Closure: Close the browser instance after completing the PDF generation process.
  
 */

const puppeteer = require('puppeteer'); // Import Puppeteer for browser automation
const readline = require('readline-sync'); // Import readline-sync for user input

async function main() {
    // Get URL input from user
    const url = readline.question('Enter the URL: ');

    // Launch Puppeteer
    const browser = await puppeteer.launch({headless: false});//headless mode by default true

    try {
        // Open a new page
        const page = await browser.newPage();

        // Navigate to the provided URL
        await page.goto(url);

        // Generate PDF
        const pdfOptions = {
            path: 'output.pdf', // Output PDF path
            format: 'letter', // Page format
            printBackground: true // Print background colors and images
        };
        await page.pdf(pdfOptions);

        console.log('PDF generated successfully.');
    } catch (error) {
        console.error('An error occurred:', error); // Log any errors
    } finally {
        // Close the browser
        await browser.close();
    }
}

main(); // Execute the main function

/**
 * Usage:
 * 1. Run the script using Node.js.
 * 2. Enter the URL of the web page you want to generate a PDF from when prompted.
 * 3. The script will generate a PDF file named `output.pdf` in the current directory.
 * 
 * Note:
 * - Ensure that the URL provided is accessible and valid.
 * - Make sure that the Puppeteer and readline-sync packages are installed before running the script.
 * - Adjust the PDF options (`path`, `format`, `printBackground`) as needed for your requirements.
 */

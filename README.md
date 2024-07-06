# toPDF: Convert HEIC Images to PDF

This React application allows you to easily convert HEIC images (High-Efficiency Image Container) to PDF documents. It utilizes the heic2any library for seamless conversion and the jsPDF library for PDF generation.

## Features

- **HEIC Support:** Uploads and converts HEIC images to a more widely compatible format (JPEG).
- **PDF Generation:** Creates a PDF document containing the converted image.
- **Error Handling:** Provides informative error messages in the console for troubleshooting.

## Installation

1. **Prerequisites:** Ensure you have Node.js (version 16 or later recommended) and npm (or yarn) installed on your system.

2. **Clone or Download Project:** Clone the project repository using Git or download the ZIP file.

3. **Install Dependencies:** Navigate to the project directory in your terminal and run:

```bash
npm install
```

This will install all the necessary dependencies (including heic2any, jsPDF, React, and React DOM) from the npm registry.

## Usage

1. **Start the Development Server:** Run the following command to start the development server:

```bash
npm run dev
```

This will typically open your default web browser and navigate to http://localhost:5173 (the port may vary depending on your development server configuration).

2. **Select an HEIC Image:** Click the "Choose File" button and select an HEIC image from your local storage.

3. **Generate PDF:** Once the image is loaded, click the "Create PDF" button. The application will convert the image to JPEG and generate a PDF document with the same name as the image, appended with ".pdf".

## Additional Notes

- The converted PDF file will be saved in your default download location.
- This application is intended for development and demonstration purposes. Consider performance optimization and security measures for production deployments.

## Technologies Used

- **React:** JavaScript library for building user interfaces (version ^18.2.0)
- **heic2any:** Library for converting HEIC images to other formats (version ^0.0.4)
- **jsPDF:** Library for generating PDF documents (version ^2.5.1)

## Contributing

We welcome contributions to improve this project! Please create pull requests on GitHub.

## License

This project is licensed under the MIT License.

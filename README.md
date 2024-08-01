# heic-converter: Convert HEIC Images to JPEG or PDF

This React application allows you to easily convert HEIC images (High-Efficiency Image Container) to jpeg or pdf. It utilizes the heic2any library for seamless conversion.

## Installation and Setup

1. **Prerequisites:** Ensure you have Node.js (version 16 or later recommended) and npm (or yarn) installed on your system.

2. **Clone or Download Project:** Clone the project repository using Git or download the ZIP file.

3. **Install Dependencies:** Navigate to the project directory in your terminal and run:

```bash
npm install
```

This will install all the necessary dependencies (including heic2any, React, and React DOM) from the npm registry.

## Usage

1. **Start the Development Server:** Run the following command to start the development server:

```bash
npm run dev
```

This will typically open your default web browser and navigate to http://localhost:5173 (the port may vary depending on your development server configuration).

2. **Select an HEIC Image:** Click the "Choose File" button and select an HEIC image from your local storage.

3. **Select the output file type jpeg or pdf:** Select between the options.

4. **Convert:** Once the image is loaded, click "Convert" button. The application will convert the HEIC image to JPEG/PDF with the same name and download the file in your default download location.

## Technologies Used

- **React:** JavaScript library for building user interfaces (version ^18.2.0)
- **heic2any:** Library for converting HEIC images to other formats (version ^0.0.4)

## Contributing

We welcome contributions to improve this project! Please create pull requests on GitHub.

## License

This project is licensed under the MIT License.

import React from 'react';
import { Component } from 'react';
import { jsPDF } from 'jspdf';
import './App.css'
import heic2any from 'heic2any';


class App extends Component{
  state = {
    imgData : '',
  }

  constructor(){
    super();
  }

  handleFileChange = (e) => {
    const {imgData} = this.state;
    const img = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      //console.log(this);
      this.setState({imgData : fileReader.result});      
    }
    //console.log(img);
    fileReader.readAsDataURL(img);
  }

  /*createPDF = () => {
    const { imgData } = this.state;
    //console.log(imgData);
    fetch(imgData)
    .then((res) => res.blob())
    .then((blob) => heic2any({ blob }))
    .then((conversionResult) =>{
      console.log(conversionResult);
      let url = URL.createObjectURL(conversionResult)
      const link = document.createElement('a');
      link.href = url;
      link.
      
      document.getElementById("target").innerHTML = `<a target="_blank" href='${url}'><img src="${url}"></a>`;
      let blob = conversionResult;
      const doc = new jsPDF();
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = doc.internal.pageSize.getHeight();
      doc.addImage(blob, 'pjeg',0,0, imgWidth, imgHeight);
      doc.save("output.pdf");
    })
    .catch((e) => {
      console.log(e)
      //aca va como manejar captura de errores
    });
  }*/

  createPDF = () => {
    const { imgData } = this.state;
    //console.log(imgData);
    fetch(imgData)
    .then((res) => res.blob())
    .then((blob) => 
      heic2any({ 
        blob,
      toType: "image/jpeg",
    quality: 0.5 }))
    .then((conversionResult) =>{
      console.log(conversionResult);
      let url = URL.createObjectURL(conversionResult)
      document.getElementById("target").innerHTML = `<a target="_blank" href='${url}'><img src="${url}"></a>`;
      let blob = conversionResult;
      const doc = new jsPDF();
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = doc.internal.pageSize.getHeight();
      doc.addImage(url, 'pjeg',0,0, imgWidth, imgHeight);
      alert("hola");
      doc.save("output.pdf");
    })
    .catch((e) => {
      console.log(e)
      //aca va como manejar captura de errores
    });
  } 


  //console.log(this.arrayBufferToBase64(imgData));
    //doc.addImage(`data:image/jpeg;base64,${this.arrayBufferToBase64(imgData)}`, 'JPG',0,0, imgWidth, imgHeight);
    //doc.addImage(`data:image/jpeg;base64,${imgData}`, 'JPEG',0,0, imgWidth, imgHeight);
    
  arrayBufferToBase64 = (buffer) => {
    console.log("buffer: " + buffer);
    let binary = '';
    const bytes = new Uint8Array(buffer);
    console.log(bytes);
    const len = bytes.byteLength;
    console.log(len);
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  render(){
    return (

      <>
        <h1>Vite + React</h1>
        <div className="card">
          <input type="file" onChange={this.handleFileChange} accept=".heic" />
          <button onClick={this.createPDF}>Create PDF</button>
          <div id='target'></div>
        </div>
      </>
    )
  }  
  
}

export default App


//import { Component } from 'react';
//import { fileTypeFromStream } from 'file-type';
//import fileTypeFromFile from 'file-type';
//import { Component } from 'react';

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
    };
  }

  handleFileChange = async (event) => {
    const file = event.target.files[0];
    const fileTypeResult = await fileType.fromFile(file);
    if (fileTypeResult?.ext === 'heic') {
      //const imageBlob = await this.heicToBlob(file);
      //this.convertToPdf(imageBlob);
    } else {
      alert('Please upload a .heic file.');
    }
  };

 //Función para convertir .heic a Blob
  heicToBlob = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  //Función para convertir Blob a PDF
  convertToPdf = (imageBlob) => {
    const doc = new jsPDF();
    const imgWidth = doc.internal.pageSize.getWidth();
    const imgHeight = doc.internal.pageSize.getHeight();
    const imgData = `data:image/jpeg;base64,${this.arrayBufferToBase64(imageBlob)}`;
    doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    doc.save('image.pdf');
  };

  //Función para convertir ArrayBuffer a base64
  arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  render() {
    return (
      <>
        <div className="App">
        <h1>Convertir .heic a PDF con jsPDF y React</h1>
        <input type="file" onChange={this.handleFileChange} accept=".heic" />
      </div>   
      </>
    );
  }
} */

{/* <div className="App">
        <h1>Convertir .heic a PDF con jsPDF y React</h1>
        <input type="file" onChange={this.handleFileChange} accept=".heic" />
      </div> */}

/* import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
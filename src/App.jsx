import React from "react";
import { Component } from "react";
import { jsPDF } from "jspdf";
import "./App.css";
import heic2any from "heic2any";

class App extends Component {
  state = {
    imgData: "",
  };

  handleFileChange = (e) => {
    let img = e.target.files[0];
    if (!img) return;
    const imgname = img === undefined ? "" : img.name;
    const extension = imgname.substr(imgname.length - 5);
    if (extension !== ".heic") {
      alert("Solo se pueden cargar archivo .heic");
      img = null;
      e.target.value = null;
      return;
    }
    this.cargoImagen(img);
  };

  cargoImagen(img) {
    const { imgData } = this.state;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imgData: fileReader.result }, () => {});
    };
    fileReader.readAsDataURL(img);
  }

  createPDF = () => {
    const { imgData } = this.state;
    fetch(imgData)
      .then((res) => res.blob())
      .then((blob) =>
        heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.5,
        })
      )
      .then((conversionResult) => {
        console.log(conversionResult);
        let url = URL.createObjectURL(conversionResult);
        let blob = conversionResult;
        const doc = new jsPDF();
        const imgWidth = doc.internal.pageSize.getWidth();
        const imgHeight = doc.internal.pageSize.getHeight();
        doc.addImage(url, "pjeg", 0, 0, imgWidth, imgHeight);
        doc.save("output.pdf");
        URL.revokeObjectURL(url);
      })
      .catch((e) => {
        console.log(e);
        alert("¿Ocurrio un error, revisa la consola!");
      });
  };

  render() {
    return (
      <>
        <h1>toPDF</h1>
        <div className='card'>
          <input type='file' onChange={this.handleFileChange} accept='.heic' />
          <button onClick={this.createPDF}>Create PDF</button>
        </div>
      </>
    );
  }
}

export default App;

import React from "react";
import { Component } from "react";
import { jsPDF } from "jspdf";
import "./App.css";
import heic2any from "heic2any";

class App extends Component {
  state = {
    imgData: null,
    imgName: "",
  };

  handleFileChange = (e) => {
    this.setState({ imgData: null, imgName: "" });
    let file = e.target.files[0];
    if (!file) return;
    const imgName = file === undefined ? "" : file.name;
    if (this.getExtension(imgName) !== ".heic") {
      alert("Solo se pueden cargar archivo .heic");
      e.target.value = null;
      return;
    }
    this.loadImage(file);
  };

  removeExtension(imgName) {
    return imgName.substr(0, imgName.length - 5);
  }

  getExtension(imgName) {
    return imgName.substr(imgName.length - 5);
  }

  loadImage(img) {
    const name = this.removeExtension(img.name);
    this.setState({ imgName: name });

    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onloadend = () => {
      this.setState({ imgData: fileReader.result }, () => {});
    };
  }

  createPDF = () => {
    const { imgData, imgName } = this.state;

    if (imgData == null) return;

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
        let url = URL.createObjectURL(conversionResult);
        let blob = conversionResult;
        const doc = new jsPDF();
        const imgWidth = doc.internal.pageSize.getWidth();
        const imgHeight = doc.internal.pageSize.getHeight();
        doc.addImage(url, "pjeg", 0, 0, imgWidth, imgHeight);
        doc.save(imgName + ".pdf");
        URL.revokeObjectURL(url);
      })
      .catch((e) => {
        console.log(e);
        alert("¡Ocurrio un error, revisa la consola!");
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

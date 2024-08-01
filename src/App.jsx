import { Component } from 'react';
import { jsPDF } from 'jspdf';
import './App.css';
import heic2any from 'heic2any';

class App extends Component {
  state = {
    imgData: null,
    imgName: '',
    outputType: 'jpeg',
    fileNotSelected: true,
  };

  handleOptionChange = (e) => {
    this.setState({ outputType: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ imgData: null, imgName: '' });
    let file = e.target.files[0];
    if (!file) {
      this.setState({ fileNotSelected: true });
      return;
    }
    const imgName = file === undefined ? '' : file.name;
    if (this.getExtension(imgName).toLowerCase() !== '.heic') {
      alert('Solo se pueden cargar archivo .heic');
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
    this.setState({ imgName: name, fileNotSelected: false });

    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onloadend = () => {
      this.setState({ imgData: fileReader.result });
    };
  }

  convert = () => {
    const { imgData, imgName, outputType } = this.state;
    if (imgData == null) return;

    fetch(imgData)
      .then((res) => res.blob())
      .then((blob) =>
        heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.5,
        })
      )
      .then((conversionResult) => {
        let url = URL.createObjectURL(conversionResult);
        if (outputType == 'jpeg') {
          this.downloadURI(url, imgName);
        } else if (outputType == 'pdf') {
          //let blob = conversionResult;
          const doc = new jsPDF();
          const imgWidth = doc.internal.pageSize.getWidth();
          const imgHeight = doc.internal.pageSize.getHeight();
          doc.addImage(url, 'jpeg', 0, 0, imgWidth, imgHeight);
          doc.save(imgName + '.pdf');
        }
        URL.revokeObjectURL(url);
        alert(`Archivo ${imgName}.${outputType} creado correctamente.`);
      })
      .catch((e) => {
        console.log(e);
        alert('¡Ocurrio un error, revisa la consola!');
      });
  };

  downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    return (
      <>
        <h1>HEIC Converter</h1>
        <div className='card'>
          <input type='file' onChange={this.handleFileChange} accept='.heic' />
          <select onChange={this.handleOptionChange}>
            <option>jpeg</option>
            <option>pdf</option>
          </select>
          <button onClick={this.convert} disabled={this.state.fileNotSelected}>
            Convert
          </button>
        </div>
      </>
    );
  }
}

export default App;

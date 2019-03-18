import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginPreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import Header from './Header';

registerPlugin(FilePondPluginPreview);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="col-4  m-3">
          <FilePond
            allowMultiple={true}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import Header from './Header';

registerPlugin(FilePondPluginImagePreview);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="col-4  m-3 mx-auto ">
          <FilePond allowMultiple={true} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    <div>
      {/* <Dropzone
        onDrop={this.onImageDrop.bind(this)}
        accept="image/*"
        multiple={false}>
        {({ getRootProps, getInputProps }) => {
          return (
            <div
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {
                <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          )
        }}
      </Dropzone> */}
      {/* <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop.bind(this)}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone> */}
    </div>
  }
}

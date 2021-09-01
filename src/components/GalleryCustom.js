import React from "react";

class GalleryCustom extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
  }

  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map((imageUrl) => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

export default GalleryCustom;

import React from 'react';

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  OverlayView,
} = require("react-google-maps");


class CustomOverlayView extends OverlayView {
  onAdd() {
    this.containerElement = document.createElement('div');
    this.containerElement.style.position = 'absolute';
    this.containerElement.style.borderStyle = 'none';
    this.containerElement.style.borderWidth = '0px';

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = this.props.image;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    this.containerElement.appendChild(img);
  }
}

// const getPixelPositionOffset = (width, height) => ({
//   x: -(width / 2),
//   y: -(height / 2),
// })

const MapWithAnOverlayView = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 62.323907, lng: -150.109291 }}
  >
    <CustomOverlayView
      // position={{ lat: -34.397, lng: 150.644 }}

      // Image from https://developers.google.com/maps/documentation/javascript/examples/full/images/talkeetna.png
      image = { require("../img/talkeetna.png") }

      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       */
      bounds={{
        ne: { lat: 62.400471, lng: -150.005608 },
        sw: { lat: 62.281819, lng: -150.287132 }
      }}

      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_LAYER}
      /*
       * 2. Tweak the OverlayView's pixel position. In this case, we're
       *    centering the content.
       */
      // getPixelPositionOffset={getPixelPositionOffset}
      /*
       * 3. Create OverlayView content using standard React components.
       */
    >
      <div></div>
    </CustomOverlayView>
  </GoogleMap>
);

export default MapWithAnOverlayView;
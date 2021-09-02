import React, { Component } from 'react';
import firebase from './Firebase';
import Utility from './utility.js'; // Used fetchFirebaseData to get variables from URL route path

export default class SlideContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null, // Keeps track of duration of slides
      slides: {}, // Holds data of all slides in the module (position, imageUrl, module)
      imageUrls: {}, // Holds Firebase URLs of images
      currentImageIndex: 0, // Used to iterate through imageUrls
    };

    this.fetchFirebaseData = this.fetchFirebaseData.bind(this);
    this.fetchtimer = this.fetchtimer.bind(this);
    this.fetchSlides = this.fetchSlides.bind(this);
    this.setImageUrls = this.setImageUrls.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  //! React Lifecycle method
  componentDidMount() {
    this.fetchFirebaseData();
    // TODO Check we need to update
    // TODO If we need to update pull data from mySQL and spit it into Firebase
  }

  fetchFirebaseData() {
    const util = new Utility();
    const module = util.getModuleFromUrl();
    this.fetchtimer(module);
    this.fetchSlides(module);
  }

  fetchtimer(module) {
    const timerRef = firebase // Reference to timer collection
      .database()
      .ref(`Modules/Module${module}/Counter/`);

    timerRef.once('value').then((snapshot) => {
      if (snapshot.exists()) {
        let timer = snapshot.val()['Counter']; // Snapchot returns an object
        this.setState({
          timer: timer,
        });
      } else {
        console.log('Snapshot not found');
      }
    });
  }

  fetchSlides(module) {
    // Reference our slides
    const slidesRef = firebase
      .database()
      .ref('Modules/Module' + module + '/Slides')
      .orderByChild('position');

    // Query into firebase and setstate of slides
    slidesRef.once('value').then((snapshot) => {
      if (snapshot.exists()) {
        this.setState({
          slides: snapshot.val(),
        });
        // After we get the slides set urls of images
        this.setImageUrls();
        this.changeImage();
      } else {
        console.log('Snapshot not found');
      }
    });
  }

  setImageUrls() {
    var arrayOfImages = [];

    // Loop through all the slide objects in state and push image urls to arrayOfImages
    Object.entries(this.state.slides).map(([key, value]) => arrayOfImages.push(value.image));

    // Set state of imageUrls
    this.setState({
      imageUrls: arrayOfImages,
    });
  }

  changeImage() {
    let { timer, currentImageIndex, imageUrls } = this.state;

    // Set image source to the url from firebase
    document.slide.src = imageUrls[currentImageIndex];

    // Loop through and reset when you get to the end of the array
    if (currentImageIndex < imageUrls.length - 1) {
      this.setState((prevState) => {
        return { currentImageIndex: prevState.currentImageIndex + 1 };
      });
    } else {
      this.setState({ currentImageIndex: 0 });
    }

    // Recursively call change image!
    setTimeout(
      function () {
        this.changeImage();
      }.bind(this),
      1000 * timer
    );
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <img name="slide" height="100%" alt="slide"></img>
      </div>
    );
  }
}

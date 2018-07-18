// this references the object that is executing the current fct
// in a method, this references the object it's within
// in a fct outside, this references the global, window obj

// ​​​​​{ title: 'a', play: [λ: play], stop: [λ], more: [λ] }​​​​​
const video = {
  title: 'a',
  play () {
    console.log(this);
  }
};

// ​​​​​{ title: 'a', play: [λ: play], stop: [λ], more: [λ] }​​​​​
video.stop = function () {
  console.log(this);
};

// {}, because of arrow fct.
video.more = () => {
  console.log(this);
}

video.play();
video.stop();
video.more();

// global object, coz of independent fct. 
function playAudio () {
  console.log(this);
}
playAudio();

// constructor fct will not reference to global obj. the new keyword will create an empty obj
// this then references to the new obj that was created Mic { title: 'b' }
function Mic(title) {
  this.title = title;
  console.log(this);
}
const m = new Mic('b')

const gramaphon = {
  title: 'c',
  tags: ['a', 'b', 'c'],
  showTags () {
    // this to get the current obj with the tags property. 
    // then loop over it and set a callback fct that gets a tag in each iteration
    // this cb fct is a regular fct, so we can't call this on the obj. props like this.title will be undefined or pointing to the global obj.
    this.tags.forEach(function(tag) {
      // console.log(this.title, tag) will not work, but the forEach method has a second parameter thisArg?
      // we can set that to this, so we reference to the grampahon obj, because forEach is a method of it.
      console.log(this.title, tag)
    }, this)
  }
}
gramaphon.showTags();

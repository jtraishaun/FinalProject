var app = new Vue({
  el: "#app",
  data: {
    parentNumber: 0,
    empty: "",
    buttons: "Add to Cart",
    instruments: [
      {
        name: "Banjo",
        type: "String",
        price: "699",
        brand: "Fender",
        img: "https://d1aeri3ty3izns.cloudfront.net/media/16/167798/1200/preview_1.jpg",
        color: "red",
        show: false
      },
      {
        name: "Violin",
        type: "String",
        price: "399",
        brand: "Yamaha",
        img:
          "https://www.corilon.com/media/image/91/0e/60/italian-carletti-school_1_1890x1890@2x.jpg",
        color: "green",
        show: false
      },
      {
        name: "Piano",
        type: "Keyboard",
        price: "780",
        brand: "Yamaha",
        img:
          "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
        color: "green",
        show: false
      },
      {
        name: "Trombone",
        type: "Air",
        price: "450",
        brand: "Fender",
        img:
          "data:image/png;base64,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",
        color: "red",
        show: false
      },
      {
        name: "Flute",
        type: "Brass",
        price: "120",
        brand: "Yamaha",
        img: "https://images-na.ssl-images-amazon.com/images/I/71KUdr-LtGL._AC_SL1500_.jpg",
        color: "green",
        show: false
      },
      {
        name: "Snare Drum",
        type: "Percussion",
        price: "109",
        brand: "Yamaha",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/71hHf6mbItL._AC_SL1237_.jpg",
        color: "green",
        show: false
      },
      {
        name: "Saxophone",
        type: "Air",
        price: "489",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/91DOyffm3cL._AC_SL1500_.jpg",
        color: "blue",
        show: false
      },
      {
        name: "Trumpet",
        type: "Air",
        price: "809",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/71l6xKqHLCL._AC_SL1500_.jpg",
        color: "blue",
        show: true
      },
      {
        name: "Cymbals",
        type: "Brass",
        price: "200",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/51ABbIozbpL._AC_.jpg",
        color: "blue",
        show: false
      }
    ],
    showPopUp: false,
    popUpItem: {},
    instrumentName: "",
    instrumentType: "",
    brandInput: "",
    priceInput: ""
  },
  methods: {
         increaseNumber: function(index) {
      this.parentNumber = this.parentNumber + 1;
      this.instruments.splice(index, 1);
          if (this.parentNumber >= 9) {
        this.empty = "Store is empty!";
      }
    },
    
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      this.popUpItem=item;
    },
    
    resetNumber: function(index, data) {
      this.parentNumber = 0;
      this.empty = "";
      this.instruments.length = 0;
      this.instruments.push({
         name: "Guitar",
        type: "Prcussion",
        price: "109",
        brand: "Fender",
        img: "https://media.kohlsimg.com/is/image/kohls/396878?wid=1000&hei=1000&op_sharpen=1",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Piano",
        type: "Keyboard",
        price: "600",
        brand: "Yamaha",
        img:
          "https://media.sweetwater.com/api/i/q-82__ha-e71eee0a573a6251__hmac-266fee025c4acd5e2fe1dbba86cd67784617fdb3/images/items/750/CVP809GPE-large.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Violin",
        type: "String",
        price: "190",
        brand: "Fender",
        img:
          "https://d1aeri3ty3izns.cloudfront.net/media/39/396671/600/preview.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Flute",
        type: "Air",
        price: "250",
        brand: "fender",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/41k7EcskX8L._SX355_.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Drum",
        type: "Brass",
        price: "180",
        brand: "Yamaha",
        img: "https://previews.123rf.com/images/andegro4ka/andegro4ka1402/andegro4ka140200037/26163211-bass-drum-vector-isolated-on-white-photo-realistic-illustration.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Acoustic Guitare",
        type: "Percussion",
        price: "130",
        brand: "Yamaha",
        img:
          "https://i5.walmartimages.com/asr/d52bd27f-85b8-40b1-a04a-6daeae4ea34f_1.350fb988c0938e21dd5e76af65ae7bb2.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Trumpet",
        type: "Air",
        price: "190",
        brand: "Maton",
        img:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dillonmusic.com%2Fbach-bach-model-lt1901b-commercial-bb-trumpet.html&psig=AOvVaw2J6IS7gqDj7i3Jxq2WwOHC&ust=1588177890327000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDJpunFi-kCFQAAAAAdAAAAABAD",
        color: "blue",
        show: false
      });
      this.instruments.push({
        name: "Soprano Sax",
        type: "Air",
        price: "100",
        brand: "Maton",
        img:
          "https://cdn.shoplightspeed.com/shops/617837/files/13821999/800x1024x2/rampone-rampone-and-cazzani-two-voices-soprano-sax.jpg",
        color: "blue",
        show: true
      });
      this.instruments.push({
       name: "Tam Tam",
        type: "Brass",
        price: "300",
        brand: "Maton",
        img:
          "https://previews.123rf.com/images/olegganko/olegganko1407/olegganko140700109/29854951-djembe-drum-tam-tam-isolated-on-white-background.jpg",
        color: "blue",
        show: false
      });
    },
    newInstrument: function() {
      this.instruments.push({
        name: this.instrumentName,
        type: this.instrumentType,
        brand: this.brandInput,
        price: this.priceInput,
        show: false,
        img:
          "https://www.pngitem.com/pimgs/m/45-459859_boulder-uk-computer-icons-color-coming-soon-icon.png"
      });

      this.instrumentName = "";
    }
  }
});
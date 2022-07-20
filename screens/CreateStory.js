//Copiamos aquí el estilo de Storycard
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import SimpleImageSlider from "react-simple-image-slider";
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};
const images = [
  { url: require("../assets/story_image_1.png")},
  { url: require("../assets/story_image_2.png")},
  { url: require("../assets/story_image_3.png")},
  { url: require("../assets/story_image_4.png")},
  { url: require("../assets/story_image_5.png")}
 ];

 const dropWithImages = [
  {title: 'Imagen 1', image: require("../assets/story_image_1.png")},
  {title: 'Imagen 2', image: require("../assets/story_image_1.png")},
  {title: 'Imagen 3', image: require("../assets/story_image_1.png")},
  {title: 'Imagen 4', image: require("../assets/story_image_1.png")},
  {title: 'Imagen 5', image: require("../assets/story_image_1.png")}
 
];

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

 

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
     
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Nueva historia</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
            <SimpleImageSlider style={{ margin: '0 auto', marginTop: '50px' }}
              width={896}
              height={504}
              onClick={""}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              />
              
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
             
             
    
              </View>

              <TextInput
                style={styles.inputFont}
                onChangeText={title => this.setState({ title })}
                placeholder={"Título"}
                placeholderTextColor="white"
              />

            <SelectDropdown 
             
             data={ countries}
             onSelect={(selectedItem, index) => {
             console.log(selectedItem, index)
             }}
             defaultButtonText={'Selecciona una imagen'}
             buttonTextAfterSelection={(selectedItem, index) => {
             // text represented after item is selected
             // if data array is an array of objects then return selectedItem.property to render after item is selected
             return selectedItem
             }}
            rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
             return item
            }}
            buttonStyle={{  flex: 1,
              height: RFValue(40),
              borderColor: "white",
              alignItems:"center",
              borderWidth: RFValue(1),
              borderRadius: RFValue(10),
              paddingLeft: RFValue(10),
              marginTop: RFValue(15),
              
            }}

            buttonTextStyle={{
              textAlign: "left",
              color: "white",
              fontFamily: "Bubblegum-Sans",
              marginTop: RFValue(7.5),
              marginBottom: RFValue(7.5),
              padding: RFValue(5)}
            }

            dropdownIconPosition={'left'}
           dropdownStyle={{backgroundColor: 'slategray'}}
            rowStyle={{
            backgroundColor: 'slategray',
            borderBottomColor: '#444',
            height: 50
          }}

            rowTextStyle={{
            textAlign: "left",
            color: "white",
            fontFamily: "Bubblegum-Sans",
            marginTop: RFValue(2),
            padding: RFValue(5)}}
               
           />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Descripción"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={story => this.setState({ story })}
                placeholder={"Historia"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={moral => this.setState({ moral })}
                placeholder={"Moraleja de la historia"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    //color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  sliderImages:{
    width: "93%",
    height: RFValue(250),
   
  },
  inputFont: {
    height: RFValue(40),
    //borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    //color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    //backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  }
});
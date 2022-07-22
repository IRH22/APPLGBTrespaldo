import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
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

  renderItem = ({item: story})=>{
      return <StoryCard story={story}/>
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <TouchableOpacity   style={styles.container}
        onPress={() =>
          this.props.navigation.navigate("PantalladeHistoria", {
            story: this.props.story
          })
        }>
          <View style={styles.cardContainer}>
            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Text style={styles.storyAuthorText} numberOfLines={2}>
                    {this.props.story.name}
                  </Text>
                </View>
            
            </View>
            
          </View>
       </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
    backgroundColor: "white"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "black"
  },
  storyAuthorText: {
    fontSize: RFValue(29),
    fontFamily: "Bubblegum-Sans",
    color: "black",
    margin: RFValue(8),
    alignSelf: "center",
    flexWrap: 'wrap',
    flexDirection: "row",
    flex: 1
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "black",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(40),
    margin: RFValue(30),
    backgroundColor: "white",
    borderRadius: RFValue(7)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    //color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
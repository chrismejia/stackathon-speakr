import React, { Component } from "react";
import { Stylesheet, View } from "react-native";
import Login from "../components/Login.js";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

/* Cheetah Kick - License Request.txt

Hello, please contact me before any commercial use.
My fonts for free use allowed only in personal project , non-profit and charity use.
If you make money from using my fonts, Please purchase a commercial license
here : http://www.typhoontype.net/fonts/cheetah-kick-font/

Typhoon Type - Suthi Srisopha
——————————————
typhoontype@gmail.com
http://www.typhoontype.net

*/

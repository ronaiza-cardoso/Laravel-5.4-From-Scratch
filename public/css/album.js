import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "minHeight": 75
    },
    "navbar": {
        "marginBottom": 0
    },
    "jumbotron": {
        "paddingTop": 6,
        "paddingBottom": 6,
        "marginBottom": 0,
        "backgroundColor": "#fff"
    },
    "jumbotron p:last-child": {
        "marginBottom": 0
    },
    "jumbotron-heading": {
        "fontWeight": "300"
    },
    "jumbotron container": {
        "maxWidth": 40
    },
    "album": {
        "minHeight": 50,
        "paddingTop": 3,
        "paddingBottom": 3,
        "backgroundColor": "#f7f7f7"
    },
    "card": {
        "float": "left",
        "width": "33.333%",
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75,
        "marginBottom": 2,
        "border": 0
    },
    "card > img": {
        "marginBottom": 0.75
    },
    "card-text": {
        "fontSize": "85%"
    },
    "footer": {
        "paddingTop": 3,
        "paddingBottom": 3
    },
    "footer p": {
        "marginBottom": 0.25
    }
});
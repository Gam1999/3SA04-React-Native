import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textmain}>{this.props.main}</Text>
                <Text style={styles.textdescription}>{this.props.description}</Text>
                <Text style={styles.texttemp}>{this.props.temp}°C</Text>
            </View>
        );
    }
}   

const styles = StyleSheet.create({
    textmain: {paddingTop: 30, fontSize: 60, color: 'black', textAlign: "center"},
    textdescription: {paddingTop: 30, fontSize: 30, color: 'black', textAlign: "center"},
    texttemp: {paddingTop: 30, fontSize: 40, color: 'black', textAlign: "center"},
    backdrop: { width: '100%', height: '100%'},
  });
   
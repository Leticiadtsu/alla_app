import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Logo = require('./src/images/logo-alla.png');

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source = {Logo}
                    />
                </View>
                <View>
                    <Text style={styles.title}>
                        Bem vindo!
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        padding: 20
    },
    title: {
        paddingTop: 40,
        color: '#2980b9',
        fontSize: 25,
    },
    logo: {
        width: 210,
        height: 100
    }
})
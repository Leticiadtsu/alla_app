import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Perfil from './Perfil';

const Logo = require('../images/logo-alla.png');

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container} >
                    <Image 
                        style = {styles.back}
                        source = {require('../images/left-arrow.png')}
                    />  
                
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source = {Logo}
                    />
                </View>

                <View>
                    <View>
                        <Menu />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        flex: 1
    },
    topo: {
        backgroundColor: 'red',
    },
    logoContainer: {
        padding: 20,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 210,
        height: 100
    },
    back: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 10,
        top: 30
    }
});
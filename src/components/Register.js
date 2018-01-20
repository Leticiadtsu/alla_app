import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import RegisterForm from './RegisterForm';

const Logo = require('../images/logo-alla.png');

export default class Register extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container} >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source = {Logo}
                    />
                </View>
                <View>
                    <View style={styles.formContainer}>
                        <RegisterForm />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        flex: 1
    },
    logoContainer: {
        padding: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 210,
        height: 100
    }
});

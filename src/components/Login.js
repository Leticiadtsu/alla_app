import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Button } from 'react-native';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const Logo = require('../images/logo-alla.png');

export default class Login extends Component {
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
                        <LoginForm />
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
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 210,
        height: 100
    }
});

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render() {
        //const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar 
                    barStyle = "light-content"
                />
                
                <View style={styles.form}>
                    <TextInput
                        placeholder = "Email"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "Senha"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                        style={styles.input}
                    />
                    <TouchableOpacity >
                    <Text style={styles.textForgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.textLogin}>
                        ENTRAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.textRegister}>
                        Não tem conta ainda? CADASTRE-SE
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    form: {
        marginTop: 20,
        marginBottom: 40
    },
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonLogin: {
        backgroundColor: "#3498db",
        marginBottom: 10,
        paddingVertical: 15
    },
    textLogin: {
        textAlign:'center',
        color: "#ffffff",
        fontWeight: '700'
    },
    buttonRegister: {
        marginBottom: 10,
        paddingVertical: 15
    },
    textRegister: {
        textAlign:'center',
        color: "#2980b9"
    },
    textForgotPassword: {
        textAlign:'right',
        color: "#2c3e50",
        textDecorationLine: 'underline'
    }
});
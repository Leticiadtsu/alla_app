import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class ResetPassword extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Recuperação de senha
                </Text>
                
                <View style={styles.form}>
                    <TextInput
                        placeholder = "Token"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        ref = {(input) => this.tokenInput = input}                        
                        onSubmitEditing = {() => this.emailInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "Email"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        ref = {(input) => this.emailInput = input}
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "Nova Senha"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>
                        ENVIAR NOVA SENHA
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
        marginBottom: 20
    },
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "#3498db",
        marginBottom: 10,
        paddingVertical: 15
    },
    textButton: {
        textAlign:'center',
        color: "#ffffff",
        fontWeight: '700'
    },
    title: {
        fontSize: 18,
        color: '#d35400',
        paddingBottom: 10,
        paddingTop: 20,
        textAlign: 'center'
    }
});
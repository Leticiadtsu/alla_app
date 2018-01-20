import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, ScrollView } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar 
                    barStyle = "light-content"
                />
                
                <View style={styles.form}>
                    <TextInput
                        placeholder = "Nome"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        ref = {(input) => this.nameInput = input}                        
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
                        placeholder = "Senha"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                        onSubmitEditing = {() => this.phoneInput.focus()}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "Telefone"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        autoCapitalize = "none"
                        ref = {(input) => this.phoneInput = input}
                        onSubmitEditing = {() => this.cpfInput.focus()}
                        autoCorrect = {false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "CPF"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "next"
                        autoCapitalize = "none"
                        ref = {(input) => this.cpfInput = input}
                        onSubmitEditing = {() => this.deficiencyInput.focus()}
                        autoCorrect = {false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder = "Deficiência"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "go"
                        ref = {(input) => this.deficiencyInput = input}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.textRegister}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.textLogin}>
                        Já tenho uma conta
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    form: {
        marginBottom: 20
    },
    input: {
        height: 40,
        marginBottom: 5,
        paddingHorizontal: 10
    },
    buttonRegister: {
        backgroundColor: "#3498db",
        marginBottom: 5,
        paddingVertical: 15
    },
    textRegister: {
        textAlign:'center',
        color: "#ffffff",
        fontWeight: '700'
    },
    buttonLogin: {
        marginBottom: 10,
        paddingVertical: 15
    },
    textLogin: {
        textAlign:'center',
        color: "#2980b9"
    }
});
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class ForgotPassword extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Esqueci a minha senha
                </Text>
                
                <View style={styles.form}>
                    <TextInput
                        placeholder = "Email"
                        placeholderTextColor = "#34495e"
                        returnKeyType = "go"
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>
                        RECUPERAR
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
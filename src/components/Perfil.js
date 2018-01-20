import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Letícia Diniz",
          email: 'leticia@teste.com',
          phone: "(35) 99999-9999",
          cpf: '000.000.000-00',
          deficiency: "Nenhuma"
        };
      }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.grid}>
                    <Text style={styles.title}>
                        Dados pessoais:
                    </Text>
                    <Image
                        style={styles.img}
                        source = {require('../images/edit.png')}
                    />
                </View>

                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        Nome: {' '}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.name}{'\n'}
                    </Text>
                </Text>

                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        E-mail: {' '}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.email}{'\n'}
                    </Text>
                </Text>

                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        Telefone: {' '}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.phone}{'\n'}
                    </Text>
                </Text>

                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        CPF: {' '}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.cpf}{'\n'}
                    </Text>
                </Text>

                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        Deficiência: {' '}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.deficiency}{'\n'}
                    </Text>
                </Text>

                <View style={styles.gridCenter} >
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.textButton}>
                            Problemas pendentes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.textButton}>
                            Problemas resolvidos
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.exit}>
                    Sair
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    grid: {
        flexDirection: 'row'
    },
    gridCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#d35400',
        paddingBottom: 10
    },
    baseText: {
        fontSize: 15,
        paddingBottom: 5
    },
    titleText: {
        fontWeight: 'bold'
    },
    img: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0
    },
    button: {
        backgroundColor: "#3498db",
        marginTop: 20,
        margin: 5,
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    textButton: {
        textAlign:'center',
        color: "#ffffff",
        fontSize: 15,
        width: 100
    },
    exit: {
        color: '#34495e',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        textDecorationLine: 'underline'
    }
});
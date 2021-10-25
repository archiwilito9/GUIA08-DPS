import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado }) => {
    const [info, setinfo] = useState([]);
    const [nombre, setnombre] = useState();
    const [capital, setcapital] = useState();
    const [bandera, setbandera] = useState();
    const [total, setotal] = useState();
    const [region, setregion] = useState();
    const [lengua, setlengua] = useState([]);
    useEffect(() => {
        setinfo(resultado);
        lengua.length = 0;
        Object.values(info).map(e => {
            setnombre(e.nome.abreviado);
            setcapital(e.governo.capital.nome);
            setotal(e.area.total);
            setregion(e.localizacao.regiao.nome);
            Object.values(e.linguas).map(l => {
                lengua.push(l.nome)
            })
        }
        );
    });
    return (
        <Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center' }}>
                <Text>Capital:{capital}</Text>
                <Text>Region:{region}</Text>
                <Text>Lengua:{lengua.toString()}</Text>
                <Text>Metros cuadrados:{total} Km</Text>
                <Text>Bandera</Text>
                <Image source={require('../img/'+e.nome.abreviado+'.jpg')}/>
            </View>
        </Card>
    );
};
export default Pais;
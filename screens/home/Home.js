
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import styles from './Estilo';

const imagem =
  'https://i.pinimg.com/736x/cf/0b/b5/cf0bb53aa06fd0f9fa3dc3e598c18ddb.jpg';

export default function Home({ navigation }) {
  const opcoes = [
    {
      titulo: 'As Sete Cortes',
      descricao: 'Conheça os territórios de Prythian.',
      tela: 'Cortes',
      simbolo: '✧',
    },
    {
      titulo: 'Personagens',
      descricao: 'Conheça os habitantes deste universo.',
      tela: 'Personagens',
      simbolo: '♛',
    },
    {
      titulo: 'Biblioteca',
      descricao: 'Explore os livros da saga.',
      tela: 'Livros',
      simbolo: '❖',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={{ uri: imagem }}
        style={styles.hero}
        imageStyle={styles.heroImagem}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.miniTitulo}>BEM-VINDA A</Text>
          <Text style={styles.heroTitulo}>PRYTHIAN</Text>
          <Text style={styles.heroTexto}>
            Onde a noite guarda segredos e as estrelas contam histórias.
          </Text>

          <TouchableOpacity
            style={styles.heroBotao}
            onPress={() => navigation.navigate('Cortes')}
          >
            <Text style={styles.heroBotaoTexto}>EXPLORAR UNIVERSO</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.conteudo}>
        <Text style={styles.destaque}>✦  BEM-VINDA AO OUTRO LADO</Text>

        <Text style={styles.tituloSecao}>
          Um universo de magia e mistérios
        </Text>

        <Text style={styles.paragrafo}>
          Entre em um mundo de feéricos, poderes antigos, reinos
          encantados e histórias que atravessam as estrelas.
        </Text>

        <Text style={styles.tituloMenu}>EXPLORE PRYTHIAN</Text>

        {opcoes.map((item) => (
          <TouchableOpacity
            key={item.tela}
            style={styles.card}
            onPress={() => navigation.navigate(item.tela)}
          >
            <Text style={styles.cardSimbolo}>{item.simbolo}</Text>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardDescricao}>
                {item.descricao}
              </Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.frase}>
          “To the stars who listen, and the dreams that are answered.”
        </Text>
      </View>
    </ScrollView>
  );
}

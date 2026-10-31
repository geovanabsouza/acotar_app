
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './Estilo';

const livros = [
  {
    numero: '01',
    titulo: 'Corte de Espinhos e Rosas',
    subtitulo: 'A Court of Thorns and Roses',
    descricao: 'Uma jovem humana atravessa a fronteira entre seu mundo e o reino dos feéricos.',
    cor: '#563B4C',
  },
  {
    numero: '02',
    titulo: 'Corte de Névoa e Fúria',
    subtitulo: 'A Court of Mist and Fury',
    descricao: 'Novas descobertas, alianças e segredos transformam o destino de Feyre.',
    cor: '#35365A',
  },
  {
    numero: '03',
    titulo: 'Corte de Asas e Ruína',
    subtitulo: 'A Court of Wings and Ruin',
    descricao: 'O continente enfrenta conflitos que podem mudar seu futuro.',
    cor: '#713D45',
  },
  {
    numero: '03.5',
    titulo: 'Corte de Gelo e Estrelas',
    subtitulo: 'A Court of Frost and Starlight',
    descricao: 'Uma história sobre reconstrução, encontros e novos começos.',
    cor: '#52617B',
  },
  {
    numero: '04',
    titulo: 'Corte de Chamas Prateadas',
    subtitulo: 'A Court of Silver Flames',
    descricao: 'Uma jornada de desafios, descobertas e transformação.',
    cor: '#66505B',
  },
];

export default function Livros() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.cabecalho}>
        <Text style={styles.simbolo}>❖</Text>
        <Text style={styles.titulo}>BIBLIOTECA</Text>
        <Text style={styles.subtitulo}>
          Cada livro é uma porta para outro mundo.
        </Text>
      </View>

      <View style={styles.lista}>
        {livros.map((livro) => (
          <View style={styles.card} key={livro.numero}>
            <View
              style={[
                styles.capa,
                { backgroundColor: livro.cor },
              ]}
            >
              <Text style={styles.capaNumero}>
                {livro.numero}
              </Text>

              <Text style={styles.capaSimbolo}>✦</Text>

              <Text style={styles.capaTitulo}>
                {livro.titulo}
              </Text>

              <View style={styles.capaLinha} />

              <Text style={styles.capaRodape}>
                SARAH J. MAAS
              </Text>
            </View>

            <View style={styles.informacoes}>
              <Text style={styles.numero}>
                LIVRO {livro.numero}
              </Text>

              <Text style={styles.nome}>
                {livro.titulo}
              </Text>

              <Text style={styles.subtituloLivro}>
                {livro.subtitulo}
              </Text>

              <Text style={styles.descricao}>
                {livro.descricao}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.rodape}>
        FIM DA COLEÇÃO • OU APENAS O COMEÇO?
      </Text>
    </ScrollView>
  );
}

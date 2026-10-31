
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './Estilo';

const cortes = [
  {
    nome: 'Corte Noturna',
    regiao: 'Montanhas, estrelas e Velaris',
    descricao: 'Um território de mistérios, liberdade, poder e sonhos.',
    simbolo: '☾',
    cor: '#76649A',
  },
  {
    nome: 'Corte Diurna',
    regiao: 'Conhecimento e luz',
    descricao: 'Uma corte associada à sabedoria, bibliotecas e conhecimento.',
    simbolo: '☀',
    cor: '#C49B6C',
  },
  {
    nome: 'Corte do Amanhecer',
    regiao: 'Luz e renovação',
    descricao: 'Uma corte ligada à beleza do nascer do sol.',
    simbolo: '✧',
    cor: '#D6A6A5',
  },
  {
    nome: 'Corte Primaveril',
    regiao: 'Flores e jardins',
    descricao: 'Campos floridos, natureza e uma beleza encantadora.',
    simbolo: '❀',
    cor: '#8AAB80',
  },
  {
    nome: 'Corte Estival',
    regiao: 'Mares e calor',
    descricao: 'Praias, águas cristalinas e uma atmosfera vibrante.',
    simbolo: '♆',
    cor: '#6FA6B3',
  },
  {
    nome: 'Corte Outonal',
    regiao: 'Florestas e folhas douradas',
    descricao: 'Uma corte marcada por tons quentes e paisagens outonais.',
    simbolo: '🍂',
    cor: '#B77B51',
  },
  {
    nome: 'Corte Invernal',
    regiao: 'Neve e gelo',
    descricao: 'Montanhas geladas e paisagens cobertas de neve.',
    simbolo: '❄',
    cor: '#9BAEC6',
  },
];

export default function Cortes() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.cabecalho}>
        <Text style={styles.simbolo}>✦</Text>
        <Text style={styles.titulo}>AS SETE CORTES</Text>
        <Text style={styles.subtitulo}>
          Sete territórios. Sete identidades. Um único continente.
        </Text>
      </View>

      <View style={styles.lista}>
        {cortes.map((corte, index) => (
          <View
            key={corte.nome}
            style={styles.card}
          >
            <View
              style={[
                styles.simboloCard,
                { borderColor: corte.cor },
              ]}
            >
              <Text style={[styles.icone, { color: corte.cor }]}>
                {corte.simbolo}
              </Text>
            </View>

            <View style={styles.informacoes}>
              <Text style={styles.numero}>
                CORTE 0{index + 1}
              </Text>

              <Text style={styles.nome}>{corte.nome}</Text>

              <Text style={styles.regiao}>{corte.regiao}</Text>

              <Text style={styles.descricao}>
                {corte.descricao}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.rodape}>
        PRYTHIAN • UM CONTINENTE DE MAGIA
      </Text>
    </ScrollView>
  );
}

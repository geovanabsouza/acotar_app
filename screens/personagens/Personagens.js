
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';

import styles from './Estilo';

const personagens = [
  {
    nome: 'Feyre Archeron',
    papel: 'Grã-Senhora da Corte Noturna',
    descricao: 'Uma humana que se transforma em uma figura central do mundo feérico.',
    imagem: 'https://i.pinimg.com/736x/cf/0b/b5/cf0bb53aa06fd0f9fa3dc3e598c18ddb.jpg',
    inicial: 'F',
  },
  {
    nome: 'Rhysand',
    papel: 'Grão-Senhor da Corte Noturna',
    descricao: 'Poderoso, estrategista e conhecido por sua ligação com as estrelas.',
    imagem: 'https://i.pinimg.com/originals/de/16/39/de1639b2c4f12c980c95523643fecd83.jpg',
    inicial: 'R',
  },
  {
    nome: 'Nesta Archeron',
    papel: 'Irmã de Feyre',
    descricao: 'Intensa, determinada e dona de uma personalidade marcante.',
    inicial: 'N',
  },
  {
    nome: 'Elain Archeron',
    papel: 'Irmã de Feyre',
    descricao: 'Gentil, observadora e ligada à natureza.',
    inicial: 'E',
  },
  {
    nome: 'Cassian',
    papel: 'General Illyriano',
    descricao: 'Guerreiro, leal e integrante do círculo íntimo de Rhysand.',
    inicial: 'C',
  },
  {
    nome: 'Azriel',
    papel: 'Sussurrador',
    descricao: 'Reservado, observador e habilidoso nas sombras.',
    inicial: 'A',
  },
  {
    nome: 'Amren',
    papel: 'Integrante da Corte Noturna',
    descricao: 'Enigmática, poderosa e de origem misteriosa.',
    inicial: 'A',
  },
];

export default function Personagens() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.cabecalho}>
        <Text style={styles.simbolo}>♛</Text>
        <Text style={styles.titulo}>PERSONAGENS</Text>
        <Text style={styles.subtitulo}>
          Aqueles que fazem parte das histórias de Prythian.
        </Text>
      </View>

      <View style={styles.lista}>
        {personagens.map((personagem) => (
          <View style={styles.card} key={personagem.nome}>
            {personagem.imagem ? (
              <Image
                source={{ uri: personagem.imagem }}
                style={styles.imagem}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagemVazia}>
                <Text style={styles.inicial}>
                  {personagem.inicial}
                </Text>
                <Text style={styles.legendaImagem}>
                  ADICIONE UMA FANART
                </Text>
              </View>
            )}

            <View style={styles.informacoes}>
              <Text style={styles.nome}>{personagem.nome}</Text>
              <Text style={styles.papel}>{personagem.papel}</Text>
              <Text style={styles.descricao}>
                {personagem.descricao}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.rodape}>O CÍRCULO ÍNTIMO</Text>
    </ScrollView>
  );
}

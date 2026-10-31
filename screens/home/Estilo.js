
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17121F',
  },

  hero: {
    height: 470,
    justifyContent: 'flex-end',
  },

  heroImagem: {
    opacity: 0.9,
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 12, 25, 0.48)',
    justifyContent: 'flex-end',
    padding: 25,
    paddingBottom: 40,
  },

  miniTitulo: {
    color: '#D7C5E8',
    letterSpacing: 4,
    fontSize: 12,
  },

  heroTitulo: {
    color: '#FFFFFF',
    fontSize: 42,
    letterSpacing: 6,
    fontWeight: '300',
    marginTop: 8,
  },

  heroTexto: {
    color: '#E5D9ED',
    fontSize: 14,
    lineHeight: 23,
    maxWidth: 300,
    marginTop: 12,
  },

  heroBotao: {
    borderWidth: 1,
    borderColor: '#D7C5E8',
    padding: 14,
    alignItems: 'center',
    marginTop: 25,
    width: 220,
  },

  heroBotaoTexto: {
    color: '#FFFFFF',
    letterSpacing: 1.5,
    fontSize: 11,
    fontWeight: 'bold',
  },

  conteudo: {
    padding: 22,
  },

  destaque: {
    color: '#B89BCF',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 12,
  },

  tituloSecao: {
    color: '#F0E8F5',
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 12,
  },

  paragrafo: {
    color: '#B9AFC0',
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 35,
  },

  tituloMenu: {
    color: '#D7C5E8',
    letterSpacing: 3,
    fontSize: 12,
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#282031',
    borderWidth: 1,
    borderColor: '#493A54',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  cardSimbolo: {
    color: '#C5A8DF',
    fontSize: 28,
    marginRight: 17,
  },

  cardTexto: {
    flex: 1,
  },

  cardTitulo: {
    color: '#F0E8F5',
    fontSize: 16,
    marginBottom: 5,
  },

  cardDescricao: {
    color: '#AFA2B8',
    fontSize: 12,
  },

  seta: {
    color: '#C5A8DF',
    fontSize: 28,
  },

  frase: {
    color: '#A58BBE',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 35,
    marginBottom: 25,
    fontSize: 13,
  },
});

export default styles;

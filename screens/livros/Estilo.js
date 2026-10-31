
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17121F',
  },

  cabecalho: {
    padding: 30,
    paddingTop: 40,
    alignItems: 'center',
  },

  simbolo: {
    color: '#B89BCF',
    fontSize: 38,
    marginBottom: 10,
  },

  titulo: {
    color: '#F0E8F5',
    fontSize: 25,
    letterSpacing: 4,
    fontWeight: '300',
  },

  subtitulo: {
    color: '#B9AFC0',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
  },

  lista: {
    paddingHorizontal: 18,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#282031',
    borderWidth: 1,
    borderColor: '#493A54',
    borderRadius: 12,
    padding: 13,
    marginBottom: 17,
    alignItems: 'center',
  },

  capa: {
    width: 112,
    height: 170,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#B89BCF',
  },

  capaNumero: {
    color: '#E8D8EC',
    fontSize: 10,
    letterSpacing: 2,
  },

  capaSimbolo: {
    color: '#E8D8EC',
    fontSize: 24,
  },

  capaTitulo: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 17,
    fontWeight: 'bold',
  },

  capaLinha: {
    width: 35,
    height: 1,
    backgroundColor: '#D7C5E8',
  },

  capaRodape: {
    color: '#E8D8EC',
    fontSize: 7,
    letterSpacing: 1,
  },

  informacoes: {
    flex: 1,
    paddingLeft: 14,
  },

  numero: {
    color: '#A58BBE',
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 7,
  },

  nome: {
    color: '#F0E8F5',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 6,
  },

  subtituloLivro: {
    color: '#B89BCF',
    fontSize: 10,
    marginBottom: 10,
  },

  descricao: {
    color: '#B9AFC0',
    fontSize: 11,
    lineHeight: 18,
  },

  rodape: {
    color: '#A58BBE',
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    margin: 30,
  },
});

export default styles;

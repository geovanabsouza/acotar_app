
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17121F',
  },

  cabecalho: {
    padding: 30,
    paddingTop: 45,
    alignItems: 'center',
  },

  simbolo: {
    color: '#B89BCF',
    fontSize: 35,
    marginBottom: 12,
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
    lineHeight: 20,
  },

  lista: {
    paddingHorizontal: 18,
  },

  card: {
    backgroundColor: '#282031',
    borderWidth: 1,
    borderColor: '#493A54',
    borderRadius: 13,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  simboloCard: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  icone: {
    fontSize: 29,
  },

  informacoes: {
    flex: 1,
  },

  numero: {
    color: '#A58BBE',
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 5,
  },

  nome: {
    color: '#F0E8F5',
    fontSize: 17,
    marginBottom: 5,
  },

  regiao: {
    color: '#C5A8DF',
    fontSize: 11,
    marginBottom: 8,
  },

  descricao: {
    color: '#B9AFC0',
    fontSize: 12,
    lineHeight: 19,
  },

  rodape: {
    color: '#766580',
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    margin: 30,
  },
});

export default styles;


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17121F',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 12, 25, 0.78)',
    justifyContent: 'center',
    padding: 28,
  },

  conteudo: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },

  simbolo: {
    color: '#D7C5E8',
    fontSize: 38,
    marginBottom: 10,
  },

  titulo: {
    color: '#F0E8F5',
    fontSize: 38,
    letterSpacing: 7,
    fontWeight: '300',
  },

  subtitulo: {
    color: '#C4B1D2',
    fontSize: 13,
    marginTop: 10,
    letterSpacing: 1,
  },

  linha: {
    width: 65,
    height: 1,
    backgroundColor: '#A58BBE',
    marginVertical: 35,
  },

  boasVindas: {
    color: '#F0E8F5',
    fontSize: 20,
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: 'rgba(48, 34, 57, 0.9)',
    borderWidth: 1,
    borderColor: '#665274',
    borderRadius: 10,
    padding: 16,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  botao: {
    width: '100%',
    backgroundColor: '#A58BBE',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  textoBotao: {
    color: '#17121F',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  rodape: {
    color: '#C4B1D2',
    marginTop: 45,
    fontStyle: 'italic',
    fontSize: 13,
  },
});

export default styles;

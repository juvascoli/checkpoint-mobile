import Calculo from './calculo'

class Resultado extends React.Component {
    constructor(props) {
    super(props);
    this.valorOriginal = {
        valorOriginal: 0
    },
    this.aumento = {
        aumento: 0
      };
    this.resultado = {
        resultado: 0
      };
  }

  render() {
    return (
      <div>
        <p>Resultado</p>
        <Calculo/>
      </div>
    );
  }
}
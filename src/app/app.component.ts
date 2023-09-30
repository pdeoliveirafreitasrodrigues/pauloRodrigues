import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pauloRodrigues';
  private nome: string;

  // É uma função específica do Angular. Ela carrega por primeiro before carregar a tela
  ngOnInit(): void {
    // sysout 
    console.log('Hello world');
    this.calculadoraMedia(9,7.5,10);
    this.verificaString('Devs3blu');
    this.calculaJuros(500, 10, 1);
    this.contaVogaisEConsoantes('ameixxxaaaa')
  }

  private calculadoraMedia(num1: number, num2: number, num3: number) : void{
      let numbers: number[] = [num1, num2, num3]
      let sum: number = 0;
      numbers.forEach(num => {
        sum += num;
      });

      const avg: number = sum / numbers.length;
      console.log('A média dos números '+ num1 + ', ' + num2 + ', ' + num3 + ' é ' + avg);
  }

  private verificaString(text: string) : void{
    const size: number = text.length;

    if (text.toLowerCase() === 'devs2blu') {
      console.log('O texto é igual à devs2blu e seu tamanho é ' + size);
    } else{
      console.log('o texto não é exatamente igual à devs2blu e seu tamanho é ' + size);
    }
  }

  private calculaJuros(capital: number, taxaJuros: number, meses: number) : void{
    const taxaJurosPct: number = taxaJuros/100;
    
    const montante: number = capital * Math.pow(1 + taxaJurosPct/1, 1 * meses);

    console.log('O valor de R$ ' + capital + ' com juros de ' 
                  + taxaJuros + '% no período de ' + meses + ' meses é de R$' + montante);
}


  private contaVogaisEConsoantes(texto: string): void{
    const arrayLetras: string[] = texto.split("");
    let arrayVog: string[] = [];
    let arrayCons : string[] = [];

    arrayLetras.forEach(letra => {
      if (letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e' || letra.toLowerCase() === 'i' || letra.toLowerCase() === 'o' || letra.toLowerCase() === 'u') {
        if (!(arrayVog.includes(letra))) {
          arrayVog.push(letra);
        }
      }else{
        if (!(arrayCons.includes(letra))) {
          arrayCons.push(letra);
        }
      }
    });

    console.log("Texto: " + texto);
    console.log("Vogais: (" + arrayVog + ") totalizando " + arrayVog.length + " vogais");
    console.log("Consoantes: (" + arrayCons + ") totalizando " + arrayCons.length + " consoantes");
  }


}

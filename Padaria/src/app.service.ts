import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FranqueadoService } from './franqueado/franqueado.service';
import { ProdutoService } from './produto/produto.service';
import { Produto } from './produto/produto.entities';
import { Registro } from './registroocorencia/registro.entities';
import { RegistroocorenciaService } from './registroocorencia/registroocorencia.service';
import { stringify } from 'querystring';
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');

@Injectable()
export class AppService {

  private status: boolean;
  private msg: string = ''; 
  private registro: Registro;


  constructor(private readonly registroService : RegistroocorenciaService,
              private readonly franqueadoService : FranqueadoService,
              private readonly produtoService : ProdutoService){}
  
  @Cron(CronExpression.EVERY_DAY_AT_6PM)
  async sendMailRelatorio() {

    const doc = new PDFDocument;
    const data = new Date();
    let nome;
    let total;
   
    doc.font('fonts/Arial.ttf')
    .fontSize(25)
    .text('Relatorio diario', 100, 100);
    
    this.franqueadoService.findAll().then(value =>{
      value.forEach(element => {
        nome = element.nome;
        doc.font('fonts/Arial.ttf')
        .fontSize(25) 
        .text("Franqueado: "+ element.nome, 100, 100);

        this.produtoService.findAll().then(value => {
          value.forEach(element => {
            total += element.preco;

            doc.font('fonts/Arial.ttf')
            .fontSize(25) 
            .text("Produto: "+ element.descricao +"Valor unidade; "+element.preco, 100, 100);
          });

          doc.font('fonts/Arial.ttf')
          .fontSize(25) 
          .text("Total vendas: "+ total, 100, 100);
        },function(value) {});

      });
    },function(value) {});

    doc.end();
     
    let transporter = nodemailer.createTransport({
      host: "localhost",
      port: "1025",
      auth: null,
    });
  
    transporter.sendMail({
      from: nome,
      to: 'gustavo.griep@edu.unipar.br',
      subject: "Relatorio franqueado", 
      html: "Relatorio de vendas franqueadas dia: "+data.getDate+": <br><br>"+
            "<p>"+doc+"</p>",
    }).then(info =>{
      this.status = true;
      this.msg = 'Email enviado para gustavo.griep@edu.unipar.br ]';
      this.salvaRegistro(true, this.msg);
    },function(info){});    
  
    this.status = false;
    this.msg = 'Erro ao enviar email para gustavo.griep@edu.unipar.br';
    this.salvaRegistro(this.status, this.msg);
  }

  async salvaRegistro(status:boolean, msg: string){
    
    var data = new Date();
    this.registro = new Registro();

    this.registro.status = status;
    this.registro.evento = msg;
    this.registro.data = data;

    this.registroService.save(this.registro);
  }
}

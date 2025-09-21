import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoComponentsModule, PoNotificationService, PoTableAction, PoTableColumn } from "@po-ui/ng-components";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PoComponentsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  

  actions: PoTableAction[] = [
    {
      label: 'Localização',
      icon: 'po-icon-map',
      action: (item: any) => this.goToMap(item)
    } ,
      {
      label: 'Anexo ZP4',
      icon: 'po-icon-map',
      action: (item: any) => this.goToMap(item)
    }]

    constructor(
    private router: Router,
    private poNotification: PoNotificationService
  ) {}
  
  columns: PoTableColumn[] = [
      {
    property: 'zp4_status',
    label: 'Status',
    type: 'subtitle',
    width: '140px',
    subtitles: [
      { value: '1', color: 'color-11', label: 'Planejado', content: '1' }, // verde
      { value: '2', color: 'color-07', label: 'Concluido', content: '2' }, // vermelho
      { value: '3', color: 'color-08', label: 'Cancelado', content: '3' },  // azul
       { value: '4', color: 'color-01', label: 'Stand By', content: '4' }  // azul
    ]
  },
  { property: 'zp4_codven', label: 'Vendedor', type: 'string', width: '100px', sortable: true },
  { property: 'zp4_client', label: 'Cliente',  type: 'string', width: '110px', sortable: true },
  { property: 'zp4_loja',   label: 'Loja',     type: 'string', width: '90px',  sortable: true },
  { property: 'zp4_nomcli', label: 'Nome do Cliente', type: 'string', width: '40%' },
  { property: 'zp4_sup',    label: 'Supervisor', type: 'string', width: '110px' },




  // ---- CAMPOS DESABILITADOS (visible: false) ----
  { property: 'zp4_filial', label: 'Filial', type: 'string', visible: false },
  { property: 'zp4_id',     label: 'ID', type: 'string', visible: false },
  // { property: 'zp4_dtvist', label: 'Data Visita', type: 'date', visible: false },
  { property: 'zp4_hora',   label: 'Hora', type: 'string', visible: false },
  { property: 'zp4_obs',    label: 'Observações', type: 'string', visible: false },
  { property: 'zp4_latitu', label: 'Latitude', type: 'string', visible: false },
  { property: 'zp4_longit', label: 'Longitude', type: 'string', visible: false },
  { property: 'zp4_dtfim',  label: 'Data Fim', type: 'date', visible: true },
  { property: 'zp4_anexo',  label: 'Anexo', type: 'string', visible: false },
  { property: 'zp4_dia',    label: 'Dia', type: 'string', visible: false },
  { property: 'zp4_dtprog', label: 'Data Programada', type: 'date', visible: false }
];


items: any[] = [
  {"zp4_filial":"","zp4_id":"20240412084218","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"14:57","zp4_status":"4","zp4_latitu":"-8.171222","zp4_longit":"-34.919233","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084252","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"11:44","zp4_status":"4","zp4_latitu":"-8.100805","zp4_longit":"-34.911976","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084334","zp4_codven":"050","zp4_client":"000388","zp4_loja":"10","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"16:41","zp4_status":"2","zp4_latitu":"-8.195709","zp4_longit":"-34.927600","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084516","zp4_codven":"050","zp4_client":"000388","zp4_loja":"04","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"16:56","zp4_status":"2","zp4_latitu":"-8.195626","zp4_longit":"-34.927638","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084559","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"610-6-4","zp4_hora":"10:06","zp4_status":"4","zp4_latitu":"-8.114090","zp4_longit":"-34.911296","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084624","zp4_codven":"050","zp4_client":"000475","zp4_loja":"04","zp4_nomcli":"MERCANTIL REAL LTDA","zp4_dtvist":"","zp4_hora":"16:55","zp4_status":"2","zp4_latitu":"-8.195710","zp4_longit":"-34.927639","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240412084711","zp4_codven":"050","zp4_client":"001512","zp4_loja":"03","zp4_nomcli":"WAL MART BRASIL LTDA","zp4_dtvist":"","zp4_hora":"16:55","zp4_status":"2","zp4_latitu":"-8.195647","zp4_longit":"-34.927622","zp4_dtfim":"2024-4-12","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748008","zp4_codven":"050","zp4_client":"000388","zp4_loja":"04","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"18:30","zp4_status":"2","zp4_latitu":"-8.114015","zp4_longit":"-34.912246","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748009","zp4_codven":"050","zp4_client":"000388","zp4_loja":"10","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"18:29","zp4_status":"2","zp4_latitu":"-8.114084","zp4_longit":"-34.912026","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748010","zp4_codven":"050","zp4_client":"000475","zp4_loja":"04","zp4_nomcli":"MERCANTIL REAL LTDA","zp4_dtvist":"","zp4_hora":"18:30","zp4_status":"2","zp4_latitu":"-8.114124","zp4_longit":"-34.912467","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748011","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"","zp4_hora":"18:28","zp4_status":"2","zp4_latitu":"-8.113928","zp4_longit":"-34.912037","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748012","zp4_codven":"050","zp4_client":"001512","zp4_loja":"03","zp4_nomcli":"WAL MART BRASIL LTDA","zp4_dtvist":"","zp4_hora":"17:59","zp4_status":"2","zp4_latitu":"-8.114387","zp4_longit":"-34.913788","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748013","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"11:20","zp4_status":"4","zp4_latitu":"-8.171037","zp4_longit":"-34.919208","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404121748014","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"10:14","zp4_status":"2","zp4_latitu":"-8.100938","zp4_longit":"-34.912005","zp4_dtfim":"2024-4-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422073655","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"07:53","zp4_status":"2","zp4_latitu":"-8.100919","zp4_longit":"-34.912015","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422073930","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"218-12-2","zp4_hora":"18:12","zp4_status":"2","zp4_latitu":"-8.195622","zp4_longit":"-34.927614","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422074000","zp4_codven":"050","zp4_client":"000377","zp4_loja":"01","zp4_nomcli":"VERD FRUT COM HORTIFRUTIGRANJEIROS LTDA","zp4_dtvist":"","zp4_hora":"13:20","zp4_status":"2","zp4_latitu":"-8.208311","zp4_longit":"-34.919740","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422074037","zp4_codven":"050","zp4_client":"000377","zp4_loja":"02","zp4_nomcli":"VERD FRUT COM HORTIFRUTIGRANJEIROS LTDA","zp4_dtvist":"218-10-2","zp4_hora":"18:10","zp4_status":"2","zp4_latitu":"-8.195601","zp4_longit":"-34.927616","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422074113","zp4_codven":"050","zp4_client":"001512","zp4_loja":"03","zp4_nomcli":"WAL MART BRASIL LTDA","zp4_dtvist":"218-11-2","zp4_hora":"18:11","zp4_status":"2","zp4_latitu":"-8.195605","zp4_longit":"-34.927618","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422074149","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"218-12-2","zp4_hora":"18:12","zp4_status":"2","zp4_latitu":"-8.195609","zp4_longit":"-34.927618","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422075532","zp4_codven":"044","zp4_client":"000388","zp4_loja":"16","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"14:58","zp4_status":"4","zp4_latitu":"-8.090348","zp4_longit":"-34.934413","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422075559","zp4_codven":"044","zp4_client":"002160","zp4_loja":"01","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"","zp4_hora":"16:35","zp4_status":"2","zp4_latitu":"-8.079129","zp4_longit":"-34.907117","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422075624","zp4_codven":"044","zp4_client":"002160","zp4_loja":"03","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"","zp4_hora":"15:59","zp4_status":"2","zp4_latitu":"-8.077011","zp4_longit":"-34.907855","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422075651","zp4_codven":"044","zp4_client":"004094","zp4_loja":"12","zp4_nomcli":"MATEUS SUPERMERCADOS S.A.","zp4_dtvist":"","zp4_hora":"09:51","zp4_status":"2","zp4_latitu":"-8.091534","zp4_longit":"-34.938013","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240422075719","zp4_codven":"044","zp4_client":"003838","zp4_loja":"13","zp4_nomcli":"NOVO ATACADO COMERCIO DE ALIMENTOS LTDA","zp4_dtvist":"","zp4_hora":"11:32","zp4_status":"2","zp4_latitu":"-8.074112","zp4_longit":"-34.908591","zp4_dtfim":"2024-4-22","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404230518013","zp4_codven":"050","zp4_client":"000377","zp4_loja":"01","zp4_nomcli":"VERD FRUT COM HORTIFRUTIGRANJEIROS LTDA","zp4_dtvist":"","zp4_hora":"13:50","zp4_status":"2","zp4_latitu":"-8.208332","zp4_longit":"-34.919916","zp4_dtfim":"2024-4-29","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404230518014","zp4_codven":"050","zp4_client":"000377","zp4_loja":"02","zp4_nomcli":"VERD FRUT COM HORTIFRUTIGRANJEIROS LTDA","zp4_dtvist":"","zp4_hora":"13:29","zp4_status":"2","zp4_latitu":"-8.194510","zp4_longit":"-34.921088","zp4_dtfim":"2024-4-29","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404230518018","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"","zp4_hora":"08:51","zp4_status":"2","zp4_latitu":"-8.114105","zp4_longit":"-34.911638","zp4_dtfim":"2024-4-29","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404230518022","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"216-11-2","zp4_hora":"16:11","zp4_status":"2","zp4_latitu":"-8.171086","zp4_longit":"-34.919386","zp4_dtfim":"2024-4-29","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404230518024","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"09:44","zp4_status":"2","zp4_latitu":"-8.100906","zp4_longit":"-34.912035","zp4_dtfim":"2024-4-29","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423052519","zp4_codven":"044","zp4_client":"002405","zp4_loja":"31","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"08:51","zp4_status":"2","zp4_latitu":"-8.077971","zp4_longit":"-34.936359","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423052924","zp4_codven":"044","zp4_client":"004094","zp4_loja":"12","zp4_nomcli":"MATEUS SUPERMERCADOS S.A.","zp4_dtvist":"314-12-4","zp4_hora":"14:12","zp4_status":"4","zp4_latitu":"-8.091467","zp4_longit":"-34.938012","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423053116","zp4_codven":"044","zp4_client":"000388","zp4_loja":"05","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"","zp4_hora":"14:50","zp4_status":"2","zp4_latitu":"-8.092483","zp4_longit":"-34.972051","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423053225","zp4_codven":"044","zp4_client":"003838","zp4_loja":"13","zp4_nomcli":"NOVO ATACADO COMERCIO DE ALIMENTOS LTDA","zp4_dtvist":"410-7-2","zp4_hora":"10:07","zp4_status":"2","zp4_latitu":"-8.074108","zp4_longit":"-34.908616","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423061714","zp4_codven":"044","zp4_client":"002405","zp4_loja":"31","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"08:14","zp4_status":"2","zp4_latitu":"-8.078016","zp4_longit":"-34.936296","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062025","zp4_codven":"044","zp4_client":"004094","zp4_loja":"12","zp4_nomcli":"MATEUS SUPERMERCADOS S.A.","zp4_dtvist":"","zp4_hora":"15:16","zp4_status":"2","zp4_latitu":"-8.091513","zp4_longit":"-34.938001","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062103","zp4_codven":"044","zp4_client":"004094","zp4_loja":"12","zp4_nomcli":"MATEUS SUPERMERCADOS S.A.","zp4_dtvist":"","zp4_hora":"07:36","zp4_status":"2","zp4_latitu":"-8.091495","zp4_longit":"-34.938018","zp4_dtfim":"2024-4-25","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062725","zp4_codven":"044","zp4_client":"002160","zp4_loja":"03","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"409-10-2","zp4_hora":"09:10","zp4_status":"2","zp4_latitu":"-8.076964","zp4_longit":"-34.907891","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062825","zp4_codven":"044","zp4_client":"002160","zp4_loja":"01","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"","zp4_hora":"09:39","zp4_status":"2","zp4_latitu":"-8.079105","zp4_longit":"-34.907137","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062848","zp4_codven":"044","zp4_client":"000388","zp4_loja":"16","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"516-8-2","zp4_hora":"16:08","zp4_status":"2","zp4_latitu":"-8.041008","zp4_longit":"-34.909760","zp4_dtfim":"2024-5-2","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423062923","zp4_codven":"044","zp4_client":"000388","zp4_loja":"05","zp4_nomcli":"SUPERMERCADO DA FAMILIA LTDA","zp4_dtvist":"216-10-2","zp4_hora":"16:10","zp4_status":"2","zp4_latitu":"-8.040900","zp4_longit":"-34.909765","zp4_dtfim":"2024-5-2","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423063147","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"15:55","zp4_status":"4","zp4_latitu":"-8.169618","zp4_longit":"-34.920166","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423070102","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"14:35","zp4_status":"4","zp4_latitu":"-8.100946","zp4_longit":"-34.912019","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423070215","zp4_codven":"050","zp4_client":"002405","zp4_loja":"03","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"15:38","zp4_status":"2","zp4_latitu":"-8.115943","zp4_longit":"-34.895833","zp4_dtfim":"2024-6-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423070241","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"09:38","zp4_status":"2","zp4_latitu":"-8.100947","zp4_longit":"-34.912016","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423070351","zp4_codven":"050","zp4_client":"001512","zp4_loja":"03","zp4_nomcli":"WAL MART BRASIL LTDA","zp4_dtvist":"","zp4_hora":"16:43","zp4_status":"2","zp4_latitu":"-8.195716","zp4_longit":"-34.927678","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423070450","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"","zp4_hora":"16:44","zp4_status":"2","zp4_latitu":"-8.195718","zp4_longit":"-34.927657","zp4_dtfim":"2024-4-23","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404232051038","zp4_codven":"050","zp4_client":"001512","zp4_loja":"03","zp4_nomcli":"WAL MART BRASIL LTDA","zp4_dtvist":"","zp4_hora":"09:51","zp4_status":"2","zp4_latitu":"-8.114385","zp4_longit":"-34.913788","zp4_dtfim":"2024-4-30","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202404232051046","zp4_codven":"050","zp4_client":"002405","zp4_loja":"05","zp4_nomcli":"SENDAS DISTRIBUIDORA S/A","zp4_dtvist":"","zp4_hora":"08:50","zp4_status":"2","zp4_latitu":"-8.100929","zp4_longit":"-34.912022","zp4_dtfim":"2024-4-30","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423210348","zp4_codven":"050","zp4_client":"000634","zp4_loja":"16","zp4_nomcli":"BOMPRECO SUPERMERCADOS DO NORDESTE LTDA","zp4_dtvist":"","zp4_hora":"14:49","zp4_status":"2","zp4_latitu":"-8.168877","zp4_longit":"-34.919634","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423210624","zp4_codven":"050","zp4_client":"000750","zp4_loja":"76","zp4_nomcli":"COMPANHIA BRASILEIRA DE DISTRIBUICAO","zp4_dtvist":"411-10-2","zp4_hora":"11:10","zp4_status":"2","zp4_latitu":"-8.196395","zp4_longit":"-34.920688","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0009","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423210706","zp4_codven":"050","zp4_client":"000750","zp4_loja":"67","zp4_nomcli":"COMPANHIA BRASILEIRA DE DISTRIBUICAO","zp4_dtvist":"415-10-2","zp4_hora":"15:10","zp4_status":"2","zp4_latitu":"-8.170978","zp4_longit":"-34.916202","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"20240423210839","zp4_codven":"050","zp4_client":"000650","zp4_loja":"04","zp4_nomcli":"KARNE KEIJO - LOGISTICA INTEGRADA LTDA","zp4_dtvist":"","zp4_hora":"08:38","zp4_status":"2","zp4_latitu":"-8.114093","zp4_longit":"-34.911607","zp4_dtfim":"2024-4-24","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202406131405010","zp4_codven":"044","zp4_client":"002160","zp4_loja":"01","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"","zp4_hora":"15:40","zp4_status":"2","zp4_latitu":"-8.115969","zp4_longit":"-34.895347","zp4_dtfim":"2024-6-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""},
  {"zp4_filial":"","zp4_id":"202406131405013","zp4_codven":"044","zp4_client":"002160","zp4_loja":"03","zp4_nomcli":"MASTERBOI LTDA","zp4_dtvist":"","zp4_hora":"15:43","zp4_status":"2","zp4_latitu":"-8.115358","zp4_longit":"-34.895692","zp4_dtfim":"2024-6-26","zp4_anexo":"S","zp4_dia":"","zp4_sup":"0008","zp4_dtprog":""}
];



  private goToMap(item: any): void {
    const lat = Number(item?.zp4_latitu);
    const lng = Number(item?.zp4_longit);

    if (isNaN(lat) || isNaN(lng)) {
      this.poNotification.warning('Lat/Long inválidos para este registro.');
      return;
    }

    // Envia para rota /maps com query params lat e lng
    this.router.navigate(['/maps'], { queryParams: { lat, lng } });
  }
}

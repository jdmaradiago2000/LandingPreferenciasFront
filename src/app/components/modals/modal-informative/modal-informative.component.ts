import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-informative',
  templateUrl: './modal-informative.component.html',
  styleUrls: ['./modal-informative.component.css']
})

export class ModalInformativeComponent implements OnInit {
  @Input() message:string;
  public image:string="entidad-no-registra-pagos";
  public textButton: string="Cancelar";
  public show: boolean = false;

  constructor(
    private modalConfirm: NgbModal
  ) { }

  ngOnInit() {
    this.image = "ic_warning.png";
    this.textButton = "Cancelar";
    this.show= true;
  }

  cancel(){
    this.modalConfirm.dismissAll();
  }
}

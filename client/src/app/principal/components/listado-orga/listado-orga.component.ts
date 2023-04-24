import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { OrgaService } from 'src/app/servicios/orga.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExpedienteORGA } from 'src/app/models/ExpedienteORGA';

@Component({
  selector: 'app-listado-orga',
  templateUrl: './listado-orga.component.html',
  styleUrls: ['./listado-orga.component.css']
})



export class ListadoOrgaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @HostBinding('class') classes = 'row';



  expedientes: any = [];

  expedientesOrga: ExpedienteORGA[] = [];

  dataSource = new MatTableDataSource<ExpedienteORGA>(this.expedientesOrga);

  constructor(private orgaService: OrgaService) { }

  ngOnInit() {
    this.getExpedientesORGA();
  }

  getExpedientesORGA() {
    this.orgaService.getExpedientesORGA().subscribe((elements: ExpedienteORGA[]) => {
      console.log("elements:" + elements);
      this.dataSource.data = elements;
      this.expedientesOrga = elements;
    });
  }

  deleteExpedienteORGA(id: string) {
    this.orgaService.deleteExpedienteORGA(id)
      .subscribe(
        res => {
          console.log(res);
          this.getExpedientesORGA();
        },
        err => console.error(err)
      )
  }
}
import { Component, OnInit } from '@angular/core';
import { DocumentsCrudService } from '../../../services/documents/documents-crud.service';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.css'
})
export class DocumentsListComponent implements OnInit {
  documents: any = [];

  constructor (private documentsCrudService: DocumentsCrudService) {

  }

  ngOnInit(): void {
    this.documentsCrudService.getDocuments()
    .subscribe(res =>{
      console.log(res)
      this.documents = res;
    });
  }

  delete(id: any, index: any) {
    console.log(id);
    if (confirm("Voulez-vous vraiment supprimer cette document? ")) {
        this.documentsCrudService.deleteDocument(id)
        .subscribe(() =>{
        this.documents.splice(index,1);
      });
    }
  }

  onDownload(id: number, fileName: string): void {
    this.documentsCrudService.downloadDocument(id, fileName).subscribe(
      (data: Blob) => {
        // Create a blob URL and initiate the download
        const blob = new Blob([data]);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = fileName; // Use the actual filename from the API
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      },
      (error) => {
        console.error('Error downloading file', error);
      }
    );
  }

}

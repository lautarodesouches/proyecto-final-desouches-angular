import { NgModule } from '@angular/core'

import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    exports: [
        MatTableModule,
        MatIconModule,
        MatButtonModule,
    ]
})

export class AppMaterialModule { }
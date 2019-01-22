import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const shoppingRoutes = [
    { path: '', component: ShoppingListComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class ShoppingListRoutingModule {}
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
    selector: 'inventory-app',
    template: ``
})
class InventoryApp {}

@NgModule({
    declarations: [
        InventoryApp
    ],
    imports: [BrowserModule],
    bootstrap: [InventoryApp],
})
class InventoryAppModule {}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
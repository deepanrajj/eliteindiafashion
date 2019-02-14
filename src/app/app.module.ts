import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EifashionroutingModule } from './eifashionrouting.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faEdit, faShoppingBasket, faTachometerAlt, faTrashAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus, faStore, faShoppingBag, faTshirt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { EifashionheaderComponent } from './eifashionheader/eifashionheader.component';
import { EifashionlandingComponent } from './eifashionlanding/eifashionlanding.component';
import { EifashionuserComponent } from './eifashionuser/eifashionuser.component';
import { EitablelistdataComponent } from './eitablelistdata/eitablelistdata.component';
import { TransformproductresponseService } from './eifashionlanding/transformproductresponse.service';
import { EifashionproductsComponent } from './eifashionproducts/eifashionproducts.component';
import { TransformproductsresponseService } from './eifashionproducts/transformproductsresponse.service';
import { EifashiondetailsmodalComponent } from './eifashiondetailsmodal/eifashiondetailsmodal.component';
import { EibillingComponent } from './eibilling/eibilling.component';

// Add an icon to the library for convenient access in other components
library.add(faCartPlus, faEdit, faShoppingBasket, faTachometerAlt, faTrashAlt, faChevronDown, faUserPlus, faStore, faShoppingBag, faTshirt, faPlus);


@NgModule({
  declarations: [
    AppComponent,
    EifashionheaderComponent,
    EifashionlandingComponent,
    EifashionuserComponent,
    EitablelistdataComponent,
    EifashionproductsComponent,
    EifashiondetailsmodalComponent,
    EibillingComponent
  ],
  imports: [
    BrowserModule,
    EifashionroutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    TransformproductresponseService,
    TransformproductsresponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

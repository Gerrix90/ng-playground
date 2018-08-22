import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { ContactFormComponent } from './core/pages/contact-form/contact-form.component';
import { PostsComponent } from './http/posts/posts.component';
import { BlogComponent } from './navagation/blog/blog.component';
import { NavagationComponent } from './navagation/navagation.component';
import { ShoppingModule } from './shopping/shopping.module';


=======
import { ContactFormComponent } from './core/components/contact-form/contact-form.component';
import { ShoppingModule } from './shopping/shopping.module';
import { TopNavbarComponent } from './core/components/top-navbar/top-navbar.component';
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
<<<<<<< HEAD
    PostsComponent,
    NavagationComponent,
    BlogComponent,
    
   ],
=======
    TopNavbarComponent,
    ],
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

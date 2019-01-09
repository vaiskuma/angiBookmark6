import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLinkComponent } from './create-link/create-link.component';
import {ArticleComponent} from './article/article.component';
import { NodeService} from './node.service'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FilterPipe} from './core/filter.pipe';
import  { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { filter } from 'rxjs/operators';



import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    CreateLinkComponent ,
    ArticleComponent,
    SearchBarComponent,
    FilterPipe,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatCardModule
  ],
  exports: [RouterModule],
  providers: [AuthService, UserService, UserResolver, AuthGuard, NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

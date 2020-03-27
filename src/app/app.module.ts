import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {UpdateblockComponent} from './components/updateblock/updateblock.component';
import {TableblockComponent} from './components/tableblock/tableblock.component';
import {MapComponent} from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {mapReducer} from './reducers/map.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {MapEffects} from './effects/map.effects';
import {reportReducer} from './reducers/report.reducers';
import {ReportEffects} from './effects/report.effects';
import {HttpConfigInterceptorProvider} from './core/http-interceptor.core';
import {globalReportReducer} from './reducers/global-report.reducers';
import {GlobalReportEffects} from './effects/global-report.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    UpdateblockComponent,
    TableblockComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        map: mapReducer,
        report: reportReducer,
        global_report: globalReportReducer,
      }
    ),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([MapEffects, ReportEffects, GlobalReportEffects])
  ],
  providers: [HttpConfigInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

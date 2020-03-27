import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MapData} from '../../models/map.models';
import {Store} from '@ngrx/store';
import {AppState, AppStateReport, GlobalAppStateReport} from '../../models/app-state.models';
import {LoadData} from '../../actions/map.actions';
import {getListState, getLoadingState} from '../../selectors/map.selectors';
import {ReportData} from '../../actions/report.actions';
import {Report} from '../../models/report.models';
import {getReportState, getRListState, getRLoadingState} from '../../selectors/report.selectors';
import {isEmpty} from 'rxjs/operators';
import {getGRListState, getGRLoadingState} from '../../selectors/global-report.selectors';
import {GlobalReportData} from '../../actions/global-report.actions';


@Component({
  selector: 'app-updateblock',
  templateUrl: './updateblock.component.html',
  styleUrls: ['./updateblock.component.css']
})
export class UpdateblockComponent implements OnInit {
  showInfo: boolean = false;
  mapData$: Observable<MapData[]>;
  reportData$: Observable<Report[]>;
  loading$: Observable<boolean>;
  RLoading$: Observable<boolean>;
  GRLoading$: Observable<boolean>;
  information;
  report;
  globalReport;

  constructor(private store: Store<{ map: AppState, report: AppStateReport, global_report: GlobalAppStateReport }>) {
  }

  ngOnInit(): void {
    //  for map data
    this.store.select(getListState).subscribe(data => {
      this.information = data;
      console.log(this.information.error !== 'Unable to geocode');

      if (this.information.error !== 'Unable to geocode' && data.length !== 0) {
        this.store.dispatch(new ReportData(data['address'].country));
        this.store.dispatch(new GlobalReportData());
        this.RLoading$ = this.store.select(getRLoadingState);
        this.GRLoading$ = this.store.select(getGRLoadingState);

      }
    });
    this.loading$ = this.store.select(getLoadingState);
    this.store.dispatch(new LoadData([85.01220703125, 28.594168506232606]));

    //for report
    this.store.select(getRListState).subscribe(data => {
      this.report = data;
    });

    //for global report
    this.store.select(getGRListState).subscribe(data => {
      this.globalReport = data;
    });

  }

  mapClicked($event) {
    this.report = {};
    this.globalReport = {};
    this.store.dispatch(new LoadData($event));

    this.showInfo = true;
  }
}

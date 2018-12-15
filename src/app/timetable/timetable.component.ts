import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs';
import { stringClass } from '../add-lecturer/add-lecturer.component';

interface Film {
  id: number;
  title: string;
  release_date: string;
}
export interface instDetails {
  instName: string;
  InstID: stringClass;
  BranchAdminEmail: string;
  spocContact: string;
  BranchAdminName: string;
  instAddr: string;
  InstContact: number;
  BranchAdminContact: number;
  BatchName: string;
  BatchID: string;
  Branch: string
  spocName: string;
}

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  return `T00:00:00${direction}${hoursOffset}${minutesOffset}`;
}

@Component({
  selector: 'app-timetable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ inst: instDetails }>>>;

  activeDayIsOpen: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.http
      .get('https://wu50ioj3ok.execute-api.ap-south-1.amazonaws.com/prod/getinstdetails')
      .pipe(
        map(({ Items }: { Items: instDetails[] }) => {
          console.log(Items);
          
          return Items.map((inst: instDetails) => {
            return {
              title: inst.instName,
              start: new Date(
                // inst.release_date + getTimezoneOffsetString(this.viewDate)
              ),
              allDay: true,
              meta: {
                inst
              }
            };
          });
        })
      );
  }
  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ inst: instDetails }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  eventClicked(event: CalendarEvent<{ inst: instDetails }>): void {
    // window.open(
    //   `https://www.themoviedb.org/movie/${event.meta.film.id}`,
    //   '_blank'
    // );
    alert(event.meta.inst.instName +"was clicked")
  }
}
// }
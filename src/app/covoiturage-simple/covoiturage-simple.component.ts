import { Component, OnInit } from '@angular/core';
import { CovoiturageSimpleService } from '../covoiturage-simple.service';
import { CovoiturageAnnounce } from '../covoiturage-announce';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-covoiturage-simple',
  templateUrl: './covoiturage-simple.component.html',
  styleUrls: ['./covoiturage-simple.component.scss']
})
export class CovoiturageSimpleComponent implements OnInit {

  announces: Array<CovoiturageAnnounce>;
  selectedAnnounce: CovoiturageAnnounce;
  announces$: Observable<Array<CovoiturageAnnounce>>;
  private searchTerms = new Subject<string>();

  constructor(private covoiturageSimpleService: CovoiturageSimpleService) {
  }

  ngOnInit(): void {
    this.announces = [];
    this.covoiturageSimpleService.fetchAnnounces().subscribe(announces => this.announces = announces);
    this.announces$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => this.filterByAuthorname(term))
    );
  }

  onInput(authorname: string): void {
    this.searchTerms.next(authorname);
  }

  private filterByAuthorname(authorname: string): Observable<Array<CovoiturageAnnounce>> {
    authorname = authorname.trim().toUpperCase();
    /* Call initial service */
    this.covoiturageSimpleService.fetchAnnounces()
       .pipe(
        map(
          announces => announces.filter(
            announce => announce.authorname.toUpperCase().includes(authorname)
          )
        )
      ).subscribe(announces => {});


    /* Reuse the initial array */
    const newArray = [...this.announces]
      .filter(announce => announce.authorname.toUpperCase().includes(authorname));
    return of(newArray);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}

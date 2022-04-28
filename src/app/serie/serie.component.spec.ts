import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Serie } from "./serie";
import { SerieComponent } from "./serie.component";
import { SerieService } from "./serie.service";
import {faker} from '@faker-js/faker';
import { By } from "@angular/platform-browser";



describe('BookListComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;
  let debug: DebugElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SerieComponent],
      providers: [SerieService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;

    component.series = [
      new Serie(faker.datatype.number(), faker.lorem.word(), faker.lorem.word(), faker.datatype.number(), faker.lorem.paragraphs(), faker.internet.url(), faker.image.imageUrl())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("Component has a table", ()=>{
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it("should have an dd element ", ()=>{
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.series[0].id.toString())
  });
});

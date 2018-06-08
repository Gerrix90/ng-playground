#  Angular 5 learning playground
## Front to back series

### from a Beginner to Advance!
#### Learn Angular fundamentals, data and handling events, building re-usable components, directives, template driven forms, reactive forms, consuming http services, routing and navagation, authenttication and authorization, deployment, building apps with firebase, animations, angular material, redux, unit testing, intergration testing and building a ecommerce store.

## routerLink
### for simple routes 
```html
<a routerLink="/home">HOME</a>
```
## routerLinkActive 
### directive & class
```html 
<li routerLinkActive="active current"><a routerLink="/home">HOME</a>
```
## Route parameters array
### when dealing with route parameters we use [property binding] to bind to an expression

 ```html
 <a [routerLink]="['/post', post.id]">{{ post.id }}</a>  
```
## Multiple route parameter
 ```html
<a [routerLink]="['/post', post.id, post.title]">{{post.id + '/' + post.title }}</a>  

```

## Getting the route parameter
```typescript
ngOnit() {
  // Getting the rquired params from routes
     this.route.params.subscribe( 
       params => this.posts$ = params.id);
    })
  }
```
 ## Query Params
  ```html
 <a routerLink="/post" [queryParams]="{ page: 5, order: 'newest' }">FORM</a>  
```
### component
```javascript
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';

export class WpPostService implements OnInit{
  posts$: Object;

constructor(private route: ActivatedRoute, private service: WpPostService) {
 
ngOnInit() {
  // Getting the query param properties
       let page = this.route.queryParamMap.get('page');

  // Combine multiple observables
       Observable.combineLatest([
       this.route.query.ParamMap
    ]) 
    
    .switchMap(combined => {
       let id = combined.[0].get('id');
       let page = combined.[1].get('page');

       return this.service.getAll();
  })
      
      .subscribe(posts => this.posts = posts)
  }
}
```
## Programmatic Navagation
```javascript
import { Router } from '@angular/router';

export class YourComponenet {
  constructor(private router: Router) { }

    submit() {
     this.router.navigate(['/path'], {
       queryParams: {page: 1, order: 'newest'}
     });
    }
}
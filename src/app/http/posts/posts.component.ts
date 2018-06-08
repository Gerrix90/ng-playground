import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {
  posts: Object;
  private url = 'https://jsonplaceholder.typicode.com/posts';

 
  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(
      response => { 
        return this.posts = response;
      });
    }
      // Post and save to the server
        createPost(input: HTMLInputElement) {
      const post: any = { title: input.value };
     input.value = '';
     this.http.post(this.url, JSON.stringify(post))
          .subscribe((response: any) => {
           // post.id = response.id;
           // this.posts.splice(0, 0, post);
           console.log(response);
          });
        }
      } 
  
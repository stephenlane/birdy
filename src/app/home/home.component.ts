import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {
  tweetForm: FormGroup;
  display: boolean = false;
  tweet_text : string;
  results = Object;
  tweets = [];
  msgs = [];

  showSuccess(text) {
    this.msgs = [];
    this.msgs.push({'severity':'success', 'summary':'Success', 'detail':text});
}

  constructor(private fb: FormBuilder, private _router : Router, public http: Http) {
      this.createForm();
      }

 getData(){
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  var a = this.http.post("http://localhost:4300/api/tweet/getTweets",
  {headers: headers}).map((response:Response) => JSON.parse(response.text()));
 return a;
  }


  postFunc(postData:any){
      const body = JSON.stringify(postData);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  var a = this.http.post("http://localhost:4300/api/tweet/addTweet",
   body, {headers: headers})
   .map((response:Response) => JSON.parse(response.text()));
   return a;
    }

  onSubmit() : void {
       if (this.tweetForm.valid) {
        this.postFunc(this.tweetForm.value).subscribe(
           (result) => {
               var msgtext = result.message;
               this.showSuccess(msgtext);
               this.display = false;
               this.tweet_text = "";
           }
         );


          this.tweets = [];
                    this.getData().subscribe(
                      (result) => {
                            this.results = result;
                         for (var i :number = 0; i < result.length; i++){
                          this.tweets.push(result[i].tweet);
                          }
                        }
                      );

}else{
 Object.keys(this.tweetForm.controls).forEach(key => {
   this.tweetForm.get(key).markAsDirty();
 });

}
}

  createForm() {
     this.tweetForm = this.fb.group({
        tweet_text: ['', Validators.compose([Validators.required])],
     });
   }

add(){
  this.display=true;
}
    ngOnInit() {
      this.getData().subscribe(
        (result) => {
              this.results = result;
           for (var i :number = 0; i < result.length; i++){
            this.tweets.push(result[i].tweet);
            }
          }
        );
}
}

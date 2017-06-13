import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()
export class GlobalService {
// BASE_API_URL :string = 'http://localhost:4300/';
// BASE_API_URL :string = 'http://localhost:4300/';
 BASE_API_URL :string  = 'http://localhost:4300/';//api/authentication/checkValidAdminToken

    getBaseAPI(){
      return this.BASE_API_URL;
    }
  }

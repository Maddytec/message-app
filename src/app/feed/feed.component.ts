import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [
    {
      user: "keren",
      name: "Keren Apuque",
      body: "Keren is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: "10000",
      avatar: "../assets/images/avatar/keren.jpg"
    },
    {
      user: "rosana",
      name: "Rosana Passos de Jesus Silva",
      body: "Rosana is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: "2000",
      avatar: "../assets/images/avatar/rosana.jpg"
    },
    {
      user: "gabriel",
      name: "Gabriel Sena",
      body: "Gabriel is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: "999",
      avatar: "../assets/images/avatar/gabriel.jpg"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';


@Injectable()
export class NewsletterService {

  readonly VAPID_PUBLIC_KEY = 'BK9dLZX9ztdlkPNNO_GcwpNwEGvgEIHsekeqJADYgbvYiSFUTO851P5nSciP3x_0W6Y7uQ8f9_eOSpDRTweE434';
  private baseUrl = 'http://localhost:9000/api/newsletter';
  constructor(private http: HttpClient,
              private swPush: SwPush) {}

  subscribeToNotification() {
    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.sendToServer(sub))
    .catch(err => console.error('Could not subscribe to notifications', err));
  }

  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification : params }).subscribe();
  }

}



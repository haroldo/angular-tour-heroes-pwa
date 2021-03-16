import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../services/newsletter.service';



@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent {

  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';

constructor(private swPush: SwPush,
              private newsletterService: NewsletterService) {}

  submitNotification(): void {
      this.newsletterService.subscribeToNotification();
    }

}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit, OnDestroy {

  private intervalId: any = null;

  // Variables pour le template
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  isOfferExpired: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Calcule le dimanche prochain à 23h59
   * @returns Date du prochain dimanche minuit
   */
  private getNextSundayMidnight(): Date {
    const now: Date = new Date();
    const nextSunday: Date = new Date(now);
    const daysUntilSunday: number = (7 - now.getDay()) % 7; // dimanche = 0

    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(23, 59, 0, 0);

    // Si déjà après dimanche 23:59, on prend dimanche prochain
    if (now.getDay() === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
      nextSunday.setDate(now.getDate() + 7);
    }

    return nextSunday;
  }

  /**
   * Met à jour le compte à rebours
   */
  private updateCountdown(): void {
    const target: Date = this.getNextSundayMidnight();
    const now: Date = new Date();
    const diff: number = target.getTime() - now.getTime();

    if (diff <= 0) {
      this.isOfferExpired = true;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      return;
    }

    this.isOfferExpired = false;

    const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((diff % (86400000)) / (3600000));
    const minutes: number = Math.floor((diff % 3600000) / 60000);
    const seconds: number = Math.floor((diff % 60000) / 1000);

    this.days = this.formatTimeUnit(days);
    this.hours = this.formatTimeUnit(hours);
    this.minutes = this.formatTimeUnit(minutes);
    this.seconds = this.formatTimeUnit(seconds);
  }

  /**
   * Formate les unités de temps (ajoute un zéro devant si < 10)
   * @param value - Valeur à formater
   * @returns Chaîne formatée (ex: '05')
   */
  private formatTimeUnit(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}

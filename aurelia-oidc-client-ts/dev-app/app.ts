export class App {
  public message = "from Aurelia!";

  private redirectUrl: string;
  attached() {
    this.redirectUrl = window.location.href;
  }

  clicked(): void {
    // eslint-disable-next-line no-alert
    alert("A primary button click or a touch");
  }
}

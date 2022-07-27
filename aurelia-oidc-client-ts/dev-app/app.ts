import { Aurelia } from "aurelia-framework";
import { UserManager } from "oidc-client-ts";
import OpenIdConnect from "open-id-connect";
export class App {
  public message = "from Aurelia!";

  private redirectUrl: string;
  private authorityUrl: string;

  public constructor(
    private userManager: UserManager,
    private oidcConnect: OpenIdConnect
  ) {}

  attached() {
    this.redirectUrl = window.location.href;
  }

  setupClient(): void {
    //
  }

  private login(): void {
    this.oidcConnect.login();
  }
}

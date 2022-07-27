import { Aurelia } from "aurelia-framework";
import { config } from "process";
import environment from "./environment";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    // load the plugin ../src
    // The "resources" is mapped to "../src" in aurelia.json "paths"
    .feature("resources");

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");
  //aurelia.use.plugin("aurelia-oidc-client", (config) => {
  //   config.
  // } );

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}

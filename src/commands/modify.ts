import { BaseInteractionCommand } from "../baseinteractioncommand";
// import { Interaction } from "detritus-client";

export default class ModifyCommand extends BaseInteractionCommand {
  name = "modify";
  description = "Modifies a value in the server.properties file.";

  // async run(ctx: Interaction.InteractionContext) {
  //   ctx.respond()
  // }
}

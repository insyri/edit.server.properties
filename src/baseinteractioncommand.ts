import { Interaction } from "detritus-client";

export class BaseInteractionCommand extends Interaction.InteractionCommand {
  disableDm = true;
}

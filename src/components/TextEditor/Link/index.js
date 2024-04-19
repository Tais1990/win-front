import Link from "./Link";
import { EntityType } from "../config";

function findLinkEntities(
  contentBlock,
  callback,
  contentState
) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === EntityType.link
    );
  }, callback);
}

const decorator = {
  strategy: findLinkEntities,
  component: Link,
};

export default decorator;
import { DIRECTIONS, OBJECT_TYPE } from "./setup";

// PRIMITIVE RANDOM MOVEMENT
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  // CREATE AN ARRAY FROM THE DIRECTIONS OBJECT KEYS
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    // GET A RANDOM KEY FROM THE KEY ARRAY
    const key = keys[Math.floor(Math.random() * keys.length)];
    // SET THE NEXT MOVE
    dir = DIRECTIONS[key];
    // SET THE NEXT MOVE
    nextMovePos = position + dir.movement;
  }
  return { nextMovePos, direction: dir };
}

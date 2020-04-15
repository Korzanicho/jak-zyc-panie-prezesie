/**
 * Method to create deep copy of object.
 * @param object: any
 * @return any
 */
export function HDeepCopy(object: any): any {
  return JSON.parse(JSON.stringify(object));
}

import * as functions from "firebase-functions";
import * as foobarGroup from "./foobar";

export function doStuff() {
  // return foobar();
}

export const yay = functions.https.onRequest((request, response) => {
  console.log("hey there");
  response.json({ foo: "bar" });
});

export const foobar = foobarGroup;

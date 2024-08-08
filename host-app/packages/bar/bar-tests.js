// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by bar.js.
import { name as packageName } from "meteor/foo:bar";

// Write your tests here!
// Here is an example.
Tinytest.add('bar - example', function (test) {
  test.equal(packageName, "bar");
});

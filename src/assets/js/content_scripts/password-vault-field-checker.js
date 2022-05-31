// var PasswordVault = PasswordVault || {};

// (function($, extApi, window, document, undefined) {
//   'use strict';

//   /**
//    * PasswordVault.FieldChecker
//    *
//    * Checks the current page to see if there is a password field.
//    *
//    * @constructor
//    */
//   PasswordVault.FieldChecker = function() {
//     this.init();
//   };

//   /**
//    * init
//    *
//    * Initial functionality. Checks if the user has password vault.
//    */
//   PasswordVault.FieldChecker.prototype.init = function() {

//     // Maintain reference to this.
//     var self = this;

//     // If the user does not have password vault.
//     this.onUserNotHavingPasswordVault(function() {

//       // Listen for messages from the background script.
//       self.startMessageListener();
//     });
//   };

//   /**
//    * onUserNotHavingPasswordVault
//    *
//    * Checks local storage to see if the user has password vault.
//    *
//    * @param callback Function
//    */
//   PasswordVault.FieldChecker.prototype.onUserNotHavingPasswordVault = function(callback) {

//     // Check local storage for user having password vault. Run callback if so.
//     extApi.storage.local.get('authed_user', function (response) {

//       // Parse the json.
//       try{
//         var userData = JSON.parse(response['authed_user']);
//       } catch(e) {
//         console.info("Couldn't find authed_user when parsing the JSON for PasswordVault Field Checker.");
//         return false;
//       }

//       // Check user data was found.
//       if(!userData) {
//         console.warn("userData not found:", userData);
//         return false;
//       }

//       // Check there was meta data on the user data object.
//       if(!userData.hasOwnProperty('metaData')) {
//         console.warn("userData.metaData not found:", userData);
//         return false;
//       }

//       // Check for hasPasswordVault in the metaData.
//       if(!userData.metaData.hasOwnProperty('hasPasswordVault')) {
//         console.warn("passwordVault not found in metaData:", userData);
//         return false;
//       }

//       // only run the callback if the user doesn't have password vault.
//       if(!userData.metaData.hasPasswordVault) {

//         // If we have a callback, run it.
//         if(typeof callback === 'function') callback();
//       }
//     });
//   };

//   /**
//    * startMessageListener
//    *
//    * The listener for changes to the storage object.
//    */
//   PasswordVault.FieldChecker.prototype.startMessageListener = function() {

//     // Maintain reference to this.
//     var self = this;

//     // Listen to storage change.
//     extApi.runtime.onMessage.addListener(function(request, sender, sendResponse) {

//       // Only perform on action that matches the passwordFieldCheck.
//       if (request.action === "passwordFieldCheck") {

//         // Inform the background script of whether there is a password field.
//         sendResponse({ success: self.pageHasPasswordField() });

//         return true;
//       }
//     });
//   };

//   /**
//    * pageHasPasswordField
//    *
//    * Checks the page for password fields.
//    */
//   PasswordVault.FieldChecker.prototype.pageHasPasswordField = function() {

//     // Find all password fields.
//     var passwordFields = document.querySelectorAll('[type="password"]');

//     // Return boolean.
//     return (passwordFields.length > 0);
//   };

// })(jQuery, $JQ.utils().getExtensionApi(), window, document);


// $JQ(document).ready(function() {
//   var fieldChecker = new PasswordVault.FieldChecker();
// });
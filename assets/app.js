/**
 * Created by tezrosolutions on 08/09/2015.
 */
/**
 * Created by tezrosolutions on 08/09/2015.
 */
/**
 * Created by tezrosolutions on 12/08/2015.
 */

var storeApp = angular.module('storeApp', []);

storeApp.controller('StoreController', function () {
 // this.products = gems;
 Parse.$ = jQuery;

 Parse.initialize("cRbcnbfn5N0KULEUbTVvm2i1ttKixNILTPmso8Qo", "ZAANEe5AsQbC4KX2VxuT5R2FSJjAtDhBx24iCL75");
// put the keys

 var GemsObject = Parse.Object.extend("gems");
 var gems = new GemsObject();

 gems.fetch({

  success: function (gems) {

   this.products.$apply(function () {
    this.products = gems;
   });

   //console.log(gems);
  },
  error: function (blogs, error) {
   console.log(error);
  }

 });

});

//storeApp.controller('PanelController',function() {
//   /*   set initialization values   */
//   this.tab =1;
//   /* tab selection function */
//  this.selectTab= function(setTab){
//     this.tab = setTab;
//   };
//  this.isSelected = function(chk){
//     return this.tab === chk;
// };
//});


//the dash in html translates to camelCasing in javascript
/*the directive*/


/* gems json object */
/*var gems = [
 {
 name:'Azurite' ,
 price:'22.49' ,
 description:'2,49' ,
 canPurchase:true,
 soldOut:true ,
 reviews:[
 {
 stars:'3',
 body:'.... ',
 author:'tim@jones.com'} ,
 {
 stars:'4',
 body:'not so good ',
 author:'james@webb.com'} ,
 {
 stars:'1',
 body:'this ....',
 author:'hater@gonnaHate.com'}
 ]
 },
 {
 name:'ruby' ,
 price:'5.49' ,
 description:'.....' ,
 canPurchase:true ,
 soldOut:false ,
 reviews:[
 {
 stars:'5',
 body:'this is awesome ',
 author:'tim@jones.com'} ,
 {
 stars:'5',
 body:'so good ',
 author:'james@webb.com'} ,
 {
 stars:'1',
 body:'this ....',
 author:'hater@gonnaHate.com'}
 ]
 },
 {
 name:'zerkon' ,
 price:'35' ,
 description:'....' ,
 canPurchase:true ,
 soldOut:false
 }/!*,
 reviews:[
 {
 stars:'4',
 body:'this is awesome ',
 author:'tim@jones.com'} ,
 {
 stars:'2',
 body:'so good ',
 author:'james@webb.com'} ,
 {
 stars:'1',
 body:'this ....',
 author:'hater@gonnaHate.com'}
 ]*!/
 ];*/

"use strict";var x=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var i=x(function(T,q){
var f=require('@stdlib/blas-ext-base-gfirst-index-less-than/dist').ndarray;function g(r,e,a,n,u,t,v){var s;return r<=0?-1:(n+=(r-1)*a,v+=(r-1)*t,a*=-1,t*=-1,s=f(r,e,a,n,u,t,v),s<0?s:r-1-s)}q.exports=g
});var d=x(function(m,y){
var c=require('@stdlib/strided-base-stride2offset/dist'),h=i();function l(r,e,a,n,u){return h(r,e,a,c(r,a),n,u,c(r,u))}y.exports=l
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),I=i();p(o,"ndarray",I);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

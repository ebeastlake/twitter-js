const _ =  require('lodash');
var data=[];
// var data=[{ name: 'Kate Ecma',
//     content: 'Fullstack Academy is awesome! The instructors are just so cool. #fullstacklove #codedreams' },
//   { name: 'Karen Ecma',
//     content: 'Fullstack Academy is funny! The instructors are just so breathtaking. #fullstacklove #codedreams' },
//   { name: 'Ashi Stackson',
//     content: 'Fullstack Academy is mindblowing! The instructors are just so awesome. #fullstacklove #codedreams' },
//   { name: 'Karen Claujure',
//     content: 'Fullstack Academy is awesome! The instructors are just so amazing. #fullstacklove #codedreams' }];

function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}



//Functions to generate tweets
//////////////////////////////////////
const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


//Defining properties on module.exports
////////////////////////////////////////////
module.exports = { add: add, list: list, find: find };


//Generating the tweets
////////////////////////////////////////
for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

// console.log(module.exports.find(function(tweet){
//     return tweet.content.includes("mindblowing");
// }));

console.log(module.exports.list());


var json = require('json!../../data/data.json');

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

export function fetchPosts() {
  const request = json;

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(slug) {
  const request = lookupPostBySlug(slug);

  return {
    type: FETCH_POST,
    payload: request
  };
}

function lookupPostById(id) {
  var response = {};
  var lookup = {};
  for (var i = 0, len = json.data.length; i < len; i++) {
    lookup[json.data[i].id] = json.data[i];
  }

  response["data"] = lookup[id];

  return response;
}

function lookupPostBySlug(slug) {
  var response = {};
  var lookup = {};
  for (var i = 0, len = json.data.length; i < len; i++) {
    lookup[json.data[i].slug] = json.data[i];
  }

  response["data"] = lookup[slug];

  return response;
}

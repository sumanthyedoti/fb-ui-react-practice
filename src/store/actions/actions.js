import {FILTER_FEED_DATA, LIKE, COMMENT} from './types';

export function filterFeedAction(type) {
  return {
    type: FILTER_FEED_DATA,
    payload: type,
  }
}

export function likeAction(postId) {
  return {
    type: LIKE,
    payload: postId,
  }
}

export function commentAction(payload) {
  return {
    type: COMMENT,
    payload,
  }
}
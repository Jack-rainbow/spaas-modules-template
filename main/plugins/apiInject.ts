import {api} from '~/api';

export default function(ctx, inject) {
  // @ts-ignore
  ctx.$api = api;
  //尚且不清楚inject是什么东东
  inject('api', api);
}

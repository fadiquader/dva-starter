import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { query } from 'services/dashboard'
import { model } from 'models/common'

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    weather: {
      city: '',
      temperature: '30',
      name: '',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    sales: [],
    quote: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
    numbers: [],
    user: {
      avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
    },
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard' || pathname === '/') {
          dispatch({ type: 'query' })
        }
      })
    },
  },
  effects: {
    * query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    }
  },
})

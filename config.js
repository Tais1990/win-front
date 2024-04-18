
const defaultConfig = {
  port: 3200,
  api: {
    url: 'http://localhost:3201/api/'
    // webSocketURL: 'ws://127.0.0.1:8000/message'
  },

}

let conf = {
  dev: defaultConfig,
  prod: defaultConfig
}

export default (mode) => conf[mode];
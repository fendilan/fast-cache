class FastCache {
  constructor() {
    this.list = {}
  }
  // 存
  set(key, value) {
    this.list[key] = value
  }
  // 取
  get(key) {
    return this.list[key]
  }
  // 清空
  clear() {
    this.list = {}
  }
}

window.FastCache = FastCache